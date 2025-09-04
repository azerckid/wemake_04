import type { Route } from "./+types/new-product-review-page";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Write a Review" },
    { name: "description", content: "Write a new product review" },
  ];
};

export default function NewProductReviewPage({
  params,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Write a Review</h1>
      <p className="text-gray-700">Product ID: {params.productId}</p>
      {/* Add review form here */}
    </div>
  );
}

