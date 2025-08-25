import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  return [
    {
      title: `Week ${params.week}, ${params.year} Leaderboard | ProductHunt Clone`,
    },
    {
      name: "description",
      content: `Top products of week ${params.week}, ${params.year}`,
    },
  ];
}

export async function loader({ params }: LoaderFunctionArgs) {
  return {
    year: params.year,
    week: params.week,
    products: [], // Add weekly leaderboard logic
  };
}

export default function WeeklyLeaderboardPage() {
  const { year, week, products } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of Week {week}, {year}
      </h1>
      {/* Add weekly leaderboard content */}
    </div>
  );
}

