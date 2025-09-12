import type { Route } from "./+types/product-overview-page";

export function meta() {
  return [
    { title: "Product Overview" },
    { name: "description", content: "View product details and information" },
  ];
};

export default function ProductOverviewPage({
  params,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Product Overview</h1>
      <p className="text-gray-700">Product ID: {params.productId}</p>
      {/* Add product overview content here */}
    </div>
  );
}

