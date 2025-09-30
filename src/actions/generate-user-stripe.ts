"use server";

import { absoluteUrl } from "@/lib/utils";

export type responseAction = {
  status: "success" | "error";
  stripeUrl?: string;
};

const billingUrl = absoluteUrl("/pricing");

export async function generateUserStripe(
  priceId: string,
): Promise<responseAction> {
  console.log("Stripe functionality is disabled.", priceId, billingUrl);
  return {
    status: "error",
  };
}
