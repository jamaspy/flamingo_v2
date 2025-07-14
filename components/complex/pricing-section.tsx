"use client";

import { useState } from "react";
import { Check, Zap, Users, Crown } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small tours and independent artists",
      icon: Zap,
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 3 tours",
        "10 team members",
        "Basic venue management",
        "Mobile app access",
        "Email support",
        "Real-time sync",
      ],
      popular: false,
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      description: "Ideal for touring bands and management companies",
      icon: Users,
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Unlimited tours",
        "50 team members",
        "Advanced venue details",
        "Custom notifications",
        "Priority support",
        "Analytics dashboard",
        "Guest access links",
        "Export capabilities",
      ],
      popular: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      description: "For large touring operations and agencies",
      icon: Crown,
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited everything",
        "Unlimited team members",
        "White-label options",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "Training sessions",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  const calculateSavings = (monthly: number, annual: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  return (
    <section className="py-16 px-4 ">
      <div className="w-full">
        <div className="text-center mb-16">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-sm font-medium ${
                !isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                isAnnual ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${
                isAnnual ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                <span>Save up to 20%</span>
              </span>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = calculateSavings(
              plan.monthlyPrice,
              plan.annualPrice
            );

            return (
              <Card
                key={plan.name}
                className={`relative ${
                  plan.popular
                    ? "border-flamingo-primary border-2 shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-flamingo-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">${price}</span>
                      <span className="text-muted-foreground">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 mt-1">
                        Save ${savings.amount} ({savings.percentage}% off)
                      </p>
                    )}
                  </div>

                  <Button
                    className={`w-full mb-6 ${
                      plan.popular ? "bg-primary hover:bg-primary/90" : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div>
              <h4 className="font-medium mb-2">Can I change plans anytime?</h4>
              <p className="text-sm text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">
                What happens after the free trial?
              </h4>
              <p className="text-sm text-muted-foreground">
                Your trial automatically converts to the plan you selected.
                Cancel anytime during the trial.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Do you offer refunds?</h4>
              <p className="text-sm text-muted-foreground">
                We offer a 30-day money-back guarantee on all annual plans, no
                questions asked.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Is there a setup fee?</h4>
              <p className="text-sm text-muted-foreground">
                No setup fees, ever. What you see is what you pay. All features
                are included in your plan.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
            <Zap className="w-4 h-4" />
            All plans include 14-day free trial
          </div>
        </div>
      </div>
    </section>
  );
}
