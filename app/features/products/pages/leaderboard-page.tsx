import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Top products leaderboard" },
  ];
};

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Leaderboards"
        subtitle="Discover the most popular products in our community"
      />
      <div className="flex gap-4 justify-center my-8">
        <Button variant="outline" asChild>
          <Link to="/products/leaderboards/daily">Daily</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products/leaderboards/weekly">Weekly</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products/leaderboards/monthly">Monthly</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/products/leaderboards/yearly">Yearly</Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <ProductCard
            key={`productId-${index}`}
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentsCount={12}
            viewsCount={12}
            votesCount={120}
          />
        ))}
      </div>
      <Button variant="link" asChild className="text-lg self-center">
        <Link to="/products/leaderboards/yearly">
          Explore all products &rarr;
        </Link>
      </Button>
    </div>
  );
}