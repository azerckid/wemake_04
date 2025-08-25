import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | ProductHunt Clone" },
    { name: "description", content: "Search for products" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get("q") || "";

  return {
    query,
    results: [], // Add search logic
  };
}

export default function SearchPage() {
  const { query, results } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {/* Add search results */}
    </div>
  );
}

