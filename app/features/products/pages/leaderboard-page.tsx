import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard | ProductHunt Clone" },
    { name: "description", content: "Top products leaderboard" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  return {
    topProducts: [], // Add leaderboard logic
  };
}

export default function LeaderboardPage() {
  const { topProducts } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
      {/* Add leaderboard content */}
    </div>
  );
}

