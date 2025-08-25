import type { MetaFunction, LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Products | ProductHunt Clone" },
    { name: "description", content: "Browse all products" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  return { hello: "world" };
}

export default function ProductsPage() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      {/* Add products grid */}
    </div>
  );
}

