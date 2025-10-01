
"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { UserSubscriptionPlan } from "@/types";

import { SubscriptionPlan } from "@/types/index";
import { pricingData } from "@/config/subscriptions";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BillingFormButton } from "@/components/forms/billing-form-button";
import { ModalContext } from "@/components/modals/providers";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export function PricingCards({ userId, subscriptionPlan }: PricingCardsProps) {
  const isYearlyDefault =
    !subscriptionPlan?.stripeCustomerId || subscriptionPlan.interval === "year"
      ? true
      : false;
  const [isYearly, setIsYearly] = useState<boolean>(!!isYearlyDefault);
  const { setShowSignInModal } = useContext(ModalContext);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-3xl border shadow-sm",
          offer.title.toLocaleLowerCase() === "pro"
            ? "-m-0.5 border-2 border-purple-400"
            : "",
        )}
        key={offer.title}
      >
        <div className="min-h-[150px] items-start space-y-4 bg-muted/50 p-6">
          <p className="flex font-urban text-sm font-bold uppercase tracking-wider text-muted-foreground">
            {offer.title}
          </p>

          <div className="flex flex-row">
            <div className="flex items-end">
              <div className="flex text-left text-3xl font-semibold leading-6">
                {isYearly && offer.prices.monthly > 0 ? (
                  <>
                    <span className="mr-2 text-muted-foreground/80 line-through">
                      ${offer.prices.monthly}
                    </span>
                    <span>${offer.prices.yearly / 12}</span>
                  </>
                ) : (
                  `$${offer.prices.monthly}`
                )}
              </div>
              <div className="-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground">
                <div>/মাস</div>
              </div>
            </div>
          </div>
          {offer.prices.monthly > 0 ? (
            <div className="text-left text-sm text-muted-foreground">
              {isYearly
                ? `$${offer.prices.yearly} বার্ষিক চার্জ করা হবে`
                : "মাসিক চার্জ করা হবে"}
            </div>
          ) : null}
        </div>

        <div className="flex h-full flex-col justify-between gap-16 p-6">
          <ul className="space-y-2 text-left text-sm font-medium leading-normal">
            {offer.benefits.map((feature) => (
              <li className="flex items-start gap-x-3" key={feature}>
                <Icons.check className="size-5 shrink-0 text-purple-500" />
                <p>{feature}</p>
              </li>
            ))}

            {offer.limitations.length > 0 &&
              offer.limitations.map((feature) => (
                <li
                  className="flex items-start text-muted-foreground"
                  key={feature}
                >
                  <Icons.close className="mr-3 size-5 shrink-0" />
                  <p>{feature}</p>
                </li>
              ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title === "স্টার্টার" ? (
              <Link
                href="/dashboard"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    rounded: "full",
                  }),
                  "w-full",
                )}
              >
                ড্যাশবোর্ডে যান
              </Link>
            ) : (
              <BillingFormButton
                year={isYearly}
                offer={offer}
                subscriptionPlan={subscriptionPlan}
              />
            )
          ) : (
            <Button
              variant={
                offer.title.toLocaleLowerCase() === "pro"
                  ? "default"
                  : "outline"
              }
              rounded="full"
              onClick={() => setShowSignInModal(true)}
            >
              সাইন ইন করুন
            </Button>
          )}
        </div>
      </div>
    );
  };

  return (
    <MaxWidthWrapper>
      <section className="flex flex-col items-center text-center">
        <HeaderSection label="মূল্য নির্ধারণ" title="সম্পূর্ণ গতিতে শুরু করুন!" />

        <div className="mb-4 mt-10 flex items-center gap-5">
          <ToggleGroup
            type="single"
            size="sm"
            defaultValue={isYearly ? "yearly" : "monthly"}
            onValueChange={toggleBilling}
            aria-label="toggle-year"
            className="h-9 overflow-hidden rounded-full border bg-background p-1 *:h-7 *:text-muted-foreground"
          >
            <ToggleGroupItem
              value="yearly"
              className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
              aria-label="Toggle yearly billing"
            >
              বার্ষিক (-২০%)
            </ToggleGroupItem>
            <ToggleGroupItem
              value="monthly"
              className="rounded-full px-5 data-[state=on]:!bg-primary data-[state=on]:!text-primary-foreground"
              aria-label="Toggle monthly billing"
            >
              মাসিক
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid gap-5 bg-inherit py-5 lg:grid-cols-3">
          {pricingData.map((offer) => (
            <PricingCard offer={offer} key={offer.title} />
          ))}
        </div>

        <p className="mt-3 text-balance text-center text-base text-muted-foreground">
          আমাদের সহায়তা দলের সাথে যোগাযোগ করতে{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:support@saas-starter.com"
          >
            support@saas-starter.com
          </a>{" "}
          -এ ইমেল করুন।
          <br />
          <strong>
            আপনি সাবস্ক্রিপশন পরীক্ষা করতে পারেন এবং আপনাকে চার্জ করা হবে না।
          </strong>
        </p>
      </section>
    </MaxWidthWrapper>
  );
}
