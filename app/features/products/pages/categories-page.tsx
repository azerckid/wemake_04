import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | ProductHunt Clone" },
    { name: "description", content: "Browse products by category" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  return {
    categories: [], // Add categories fetch logic
  };
}

export default function CategoriesPage() {
  const { categories } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      {/* Add categories grid */}
    </div>
  );
}

