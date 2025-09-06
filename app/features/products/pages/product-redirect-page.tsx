import { redirect, type LoaderFunctionArgs } from "react-router";

export const loader = ({ params }: LoaderFunctionArgs) => {
  return redirect(`/products/${params.productId}/overview`);
};

