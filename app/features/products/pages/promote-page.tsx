import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | ProductHunt Clone" },
    { name: "description", content: "Promote your product" },
  ];
}

export async function loader({ request }: LoaderFunctionArgs) {
  return {
    promotionOptions: [], // Add promotion options
  };
}

export default function PromotePage() {
  const { promotionOptions } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      {/* Add promotion options */}
    </div>
  );
}

