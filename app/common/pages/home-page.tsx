import { ProductCard } from "~/features/products/components/product-card";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-4">
        {[
          {
            id: "1",
            name: "Product 1",
            description: "This is a great product that solves many problems",
            commentsCount: 42,
            viewsCount: 1234,
            votesCount: 120,
          },
          {
            id: "2",
            name: "Product 2",
            description: "Another amazing product with fantastic features",
            commentsCount: 28,
            viewsCount: 987,
            votesCount: 89,
          },
        ].map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            commentsCount={product.commentsCount}
            viewsCount={product.viewsCount}
            votesCount={product.votesCount}
          />
        ))}
      </div>
    </div>
  );
}
