"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import { toast } from "sonner";

interface CustomerPortalButtonProps {
  userStripeId: string;
}

export function CustomerPortalButton({
  userStripeId,
}: CustomerPortalButtonProps) {
  let [isPending, startTransition] = useTransition();

  const stripeSessionAction = () =>
    startTransition(async () => {
      toast.error("This functionality has been disabled.");
    });

  return (
    <Button disabled={isPending} onClick={stripeSessionAction}>
      {isPending ? (
        <Icons.spinner className="mr-2 size-4 animate-spin" />
      ) : null}
      Open Customer Portal
    </Button>
  );
}
