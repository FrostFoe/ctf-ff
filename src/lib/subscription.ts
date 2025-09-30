// @ts-nocheck
// TODO: Fix this when we turn strict mode on.
import { pricingData } from "@/config/subscriptions";
import { UserSubscriptionPlan } from "types";

export async function getUserSubscriptionPlan(
  userId: string
): Promise<UserSubscriptionPlan> {
  if (!userId) throw new Error("Missing parameters");

  // Since Stripe is removed, we'll return the default free plan.
  const plan = pricingData[0];

  return {
    ...plan,
    stripeCustomerId: null,
    stripeSubscriptionId: null,
    stripePriceId: null,
    stripeCurrentPeriodEnd: null,
    isPaid: false,
    interval: null,
    isCanceled: true,
  };
}
