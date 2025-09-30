"use server";

import { absoluteUrl } from "@/lib/utils";

export type responseAction = {
  status: "success" | "error";
  stripeUrl?: string;
};

const billingUrl = absoluteUrl("/dashboard/billing");

export async function openCustomerPortal(
  userStripeId: string,
): Promise<responseAction> {
  console.log("Stripe functionality is disabled.", userStripeId, billingUrl);
  return {
    status: "error",
  };
}
