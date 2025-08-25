import { useActionData, type ActionFunctionArgs } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | ProductHunt Clone" },
    { name: "description", content: "Submit your product" },
  ];
}

export async function action({ request }: ActionFunctionArgs) {
  // Add product submission logic
  return {};
}

export default function SubmitPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Your Product</h1>
      {/* Add submission form */}
    </div>
  );
}

