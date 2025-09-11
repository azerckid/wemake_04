#!/usr/bin/env python3
import subprocess
import sys
import os
import tempfile
from datetime import datetime, timedelta

# 가장 오래된 커밋이 2025-08-18 01:28:08이 되도록 설정
START_DATE = datetime(2025, 8, 18, 1, 28, 8)
HOURS_INTERVAL = 12

print("커밋 목록을 가져오는 중...")

# 원격 저장소 확인
try:
    result = subprocess.run(
        ['git', 'remote', 'get-url', 'origin'],
        capture_output=True,
        text=True,
        check=False
    )
    has_remote = result.returncode == 0
except:
    has_remote = False

# 원격 저장소에 푸시되지 않은 커밋만 가져오기 (가장 오래된 것부터)
if has_remote:
    try:
        # 원격 브랜치 정보 가져오기
        subprocess.run(['git', 'fetch', 'origin'], check=False, capture_output=True)
        result = subprocess.run(
            ['git', 'log', 'origin/main..HEAD', '--reverse', '--format=%H'],
            capture_output=True,
            text=True,
            check=True
        )
        commits = [c for c in result.stdout.strip().split('\n') if c]
    except subprocess.CalledProcessError:
        print("⚠️  원격 브랜치를 찾을 수 없습니다. 모든 커밋을 대상으로 합니다.")
        # 모든 커밋 가져오기
        result = subprocess.run(
            ['git', 'log', '--reverse', '--format=%H'],
            capture_output=True,
            text=True,
            check=True
        )
        commits = [c for c in result.stdout.strip().split('\n') if c]
else:
    print("⚠️  원격 저장소가 설정되지 않았습니다. 모든 커밋을 대상으로 합니다.")
    # 모든 커밋 가져오기
    result = subprocess.run(
        ['git', 'log', '--reverse', '--format=%H'],
        capture_output=True,
        text=True,
        check=True
    )
    commits = [c for c in result.stdout.strip().split('\n') if c]

total = len(commits)

if total == 0:
    print("❌ 변경할 커밋이 없습니다.")
    sys.exit(1)

# 가장 최신 커밋 날짜 계산
END_DATE = START_DATE + timedelta(hours=(total - 1) * HOURS_INTERVAL)

print(f"총 {total}개의 커밋 날짜를 변경합니다...")
print(f"가장 오래된 커밋 날짜: {START_DATE.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"최신 커밋 날짜: {END_DATE.strftime('%Y-%m-%d %H:%M:%S')}")
print(f"간격: {HOURS_INTERVAL}시간")
print()

# 각 커밋의 날짜 미리보기
for i, commit in enumerate(commits):
    hours_offset = i * HOURS_INTERVAL
    new_date = START_DATE + timedelta(hours=hours_offset)
    print(f"커밋 {i+1}/{total}: {commit[:8]} -> {new_date.strftime('%Y-%m-%d %H:%M:%S')}")

print()
response = input("계속하시겠습니까? (y/N): ")
if response.lower() != 'y':
    print("취소되었습니다.")
    sys.exit(0)

print()
print("커밋 날짜를 변경하는 중...")

# Python 스크립트를 사용하여 날짜 계산
env_filter_script = f'''#!/usr/bin/env python3
import sys
from datetime import datetime, timedelta

START_DATE = datetime(2025, 8, 18, 1, 28, 8)
HOURS_INTERVAL = 12
COMMITS = {commits}
TOTAL = {total}

commit_hash = sys.argv[1] if len(sys.argv) > 1 else ""

try:
    idx = COMMITS.index(commit_hash)
    hours_offset = idx * HOURS_INTERVAL
    new_date = START_DATE + timedelta(hours=hours_offset)
    print(new_date.strftime("%Y-%m-%d %H:%M:%S"))
except (ValueError, IndexError):
    pass
'''

# 임시 파일에 Python 스크립트 작성 (더 안전한 방법)
temp_dir = tempfile.gettempdir()
temp_file = os.path.join(temp_dir, 'calc_date.py')
with open(temp_file, 'w') as f:
    f.write(env_filter_script)

# 실행 권한 부여
os.chmod(temp_file, 0o755)

# git filter-branch 실행
env_filter = f'''commit_hash="$GIT_COMMIT"
new_date=$(python3 {temp_file} "$commit_hash")
if [ -n "$new_date" ]; then
    export GIT_AUTHOR_DATE="$new_date"
    export GIT_COMMITTER_DATE="$new_date"
fi
'''

# git filter-branch 실행 (현재 브랜치만 대상으로)
print("git filter-branch 실행 중... (시간이 걸릴 수 있습니다)")
current_branch = subprocess.run(
    ['git', 'rev-parse', '--abbrev-ref', 'HEAD'],
    capture_output=True,
    text=True,
    check=True
).stdout.strip()

result = subprocess.run(
    ['git', 'filter-branch', '-f', '--env-filter', env_filter, '--tag-name-filter', 'cat', '--', current_branch],
    check=False
)

# 임시 파일 정리
try:
    os.remove(temp_file)
except:
    pass

if result.returncode == 0:
    print()
    print("✓ 완료! 커밋 날짜가 변경되었습니다.")
    print("변경사항을 확인하려면: git log --date=format:'%Y-%m-%d %H:%M:%S'")
    print()
    print("⚠️  주의: 원격 저장소에 이미 푸시된 커밋이 있다면 force push가 필요합니다:")
    print(f"   git push origin {current_branch} --force")
else:
    print()
    print("✗ 오류가 발생했습니다. git filter-branch 실행에 실패했습니다.")
    sys.exit(1)
