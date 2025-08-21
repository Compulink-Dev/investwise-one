import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "./ui/button";

// Investment Protection Component
export function InvestmentProtection() {
  const protections = [
    {
      title: "Types of Investment Fraud",
      description:
        "Learn about common investment scams and how to recognize them.",
      href: "/types-of-investment-fraud",
    },
    {
      title: "Avoiding Investment Fraud",
      description:
        "Discover strategies to protect yourself from investment scams.",
      href: "/what-you-can-do-to-avoid-investment-fraud",
    },
    {
      title: "Red Flags for Fraud",
      description:
        "Identify warning signs that may indicate an investment opportunity is fraudulent.",
      href: "/red-flags-for-investment-fraud",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Protecting Your Investment
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Safeguard your investments by understanding and avoiding common
            risks and frauds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {protections.map((protection, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="inline-flex items-center justify-center p-2 bg-red-100 rounded-full mb-4 mx-auto">
                  <Shield className="h-5 w-5 text-red-600" />
                </div>
                <CardTitle>{protection.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {protection.description}
                </CardDescription>
                <Button variant="link" className="text-red-600" asChild>
                  <a href={protection.href}>
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
