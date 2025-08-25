import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `${params.category} | ProductHunt Clone` },
    { name: "description", content: `Browse ${params.category} products` },
  ];
}

export async function loader({ params }: LoaderFunctionArgs) {
  return {
    category: params.category,
    products: [], // Add category products fetch logic
  };
}

export default function CategoryPage() {
  const { category, products } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      {/* Add category products grid */}
    </div>
  );
}

