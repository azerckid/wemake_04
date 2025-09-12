import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Submit Job | wemake" }];
};

export default function SubmitJobPage() {
  return (
    <div>
      <h1>Submit Job</h1>
    </div>
  );
}

