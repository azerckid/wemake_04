import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `${params.year} Leaderboard | ProductHunt Clone` },
    { name: "description", content: `Top products of ${params.year}` },
  ];
}

export async function loader({ params }: LoaderFunctionArgs) {
  return {
    year: params.year,
    products: [], // Add yearly leaderboard logic
  };
}

export default function YearlyLeaderboardPage() {
  const { year, products } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {year}
      </h1>
      {/* Add yearly leaderboard content */}
    </div>
  );
}

