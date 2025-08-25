import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `${params.month}/${params.year} Leaderboard | ProductHunt Clone` },
    {
      name: "description",
      content: `Top products of ${params.month}/${params.year}`,
    },
  ];
}

export async function loader({ params }: LoaderFunctionArgs) {
  return {
    year: params.year,
    month: params.month,
    products: [], // Add monthly leaderboard logic
  };
}

export default function MonthlyLeaderboardPage() {
  const { year, month, products } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        Top Products of {month}/{year}
      </h1>
      {/* Add monthly leaderboard content */}
    </div>
  );
}

