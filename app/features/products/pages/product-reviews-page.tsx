import { Button } from "~/common/components/ui/button";
import {
  Dialog,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { ReviewCard } from "../components/review-card";
import CreateReviewDialog from "../components/create-review-dialog";

export function meta() {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "Read and write product reviews" },
  ];
}

export default function ProductReviewsPage() {
  return (
    <div className="space-y-10 max-w-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">10 Reviews </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
          <CreateReviewDialog />
        </Dialog>
      </div>
      <div className="space-y-20">
        {Array.from({ length: 10 }).map((_, i) => (
          <ReviewCard
            key={i}
            username="John Doe"
            handle="@username"
            avatarUrl="https://github.com/facebook.png"
            rating={5}
            content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. need more long sentense give me lorem ipums dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. need more "
            postedAt="10 days ago"
          />
        ))}
      </div>
    </div>
  );
}
