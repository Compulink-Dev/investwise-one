import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

// Investment Process Component
export function InvestmentProcess() {
  const steps = [
    {
      title: "Diversify Investments",
      description:
        "Learn how to spread your investments across different assets to manage risk.",
      href: "/investment-process/diversify-your-investments",
    },
    {
      title: "Know Your Intermediaries",
      description:
        "Understand the role of licensed intermediaries in the investment process.",
      href: "/investment-process/know-your-licensed-intermediaries",
    },
    {
      title: "Risk Profile Assessment",
      description:
        "Discover your risk tolerance and how it should guide your investment choices.",
      href: "/investment-process/knowing-your-risk-profile",
    },
    {
      title: "Portfolio Monitoring",
      description:
        "Learn how to regularly review and adjust your investment portfolio.",
      href: "/investment-process/portfolio-monitoring-and-performance-evaluation",
    },
    {
      title: "Setting Objectives",
      description:
        "Define clear investment goals to guide your financial strategy.",
      href: "/investment-process/setting-investment-objectives",
    },
    {
      title: "Understanding Products",
      description: "Explore different investment products and how they work.",
      href: "/investment-process/understand-investment-products",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-full mb-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Investment Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Follow these steps to build and maintain a successful investment
            strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600 mb-4">{step.description}</p>
              <Button variant="link" className="text-green-600" asChild>
                <a href={step.href}>
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
