import type { MetaFunction } from "react-router";
import { Link } from "react-router";

import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";

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

      <div className="space-y-16">
        {/* Daily Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Daily</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <ProductCard
                key={`daily-productId-${index}`}
                id={`daily-productId-${index}`}
                name="Product Name"
                description="Product Description"
                commentsCount={12}
                viewsCount={12}
                votesCount={120}
              />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
              <Link to="/products/leaderboards/daily">
                Explore all products &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Weekly Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Weekly</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <ProductCard
                key={`weekly-productId-${index}`}
                id={`weekly-productId-${index}`}
                name="Product Name"
                description="Product Description"
                commentsCount={12}
                viewsCount={12}
                votesCount={120}
              />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
              <Link to="/products/leaderboards/weekly">
                Explore all products &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Monthly Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Monthly</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <ProductCard
                key={`monthly-productId-${index}`}
                id={`monthly-productId-${index}`}
                name="Product Name"
                description="Product Description"
                commentsCount={12}
                viewsCount={12}
                votesCount={120}
              />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
              <Link to="/products/leaderboards/monthly">
                Explore all products &rarr;
              </Link>
            </Button>
          </div>
        </div>

        {/* Yearly Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Yearly</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 7 }).map((_, index) => (
              <ProductCard
                key={`yearly-productId-${index}`}
                id={`yearly-productId-${index}`}
                name="Product Name"
                description="Product Description"
                commentsCount={12}
                viewsCount={12}
                votesCount={120}
              />
            ))}
            <Button variant="link" asChild className="text-lg self-center">
              <Link to="/products/leaderboards/yearly">
                Explore all products &rarr;
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}