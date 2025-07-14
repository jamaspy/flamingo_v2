import { checkoutAction } from "@/lib/payments/actions";
import { Check } from "lucide-react";
import { getStripePrices, getStripeProducts } from "@/lib/payments/stripe";
import { PricingCard } from "./pricing-card";

// Prices are fresh for one hour max
export const revalidate = 3600;

export async function PricingSection() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === "Base");
  const plusPlan = products.find((product) => product.name === "Plus");

  const basePrice = prices.find((price) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price) => price.productId === plusPlan?.id);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl  mx-auto">
        <PricingCard
          name={basePlan?.name || "Base"}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || "month"}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            "Unlimited Usage",
            "Unlimited Workspace Members",
            "Email Support",
          ]}
          priceId={basePrice?.id}
        />
        <PricingCard
          name={plusPlan?.name || "Plus"}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || "month"}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={[
            "Everything in Base, and:",
            "Early Access to New Features",
            "24/7 Support + Slack Access",
          ]}
          priceId={plusPrice?.id}
        />
      </div>
    </main>
  );
}
