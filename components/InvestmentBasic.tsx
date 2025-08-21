import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

// Investing Basics Component
export function InvestingBasics() {
  const topics = [
    {
      title: "Financial Literacy",
      description:
        "Learn the fundamentals of managing your money and making informed financial decisions.",
      href: "/investment-basics/being-financially-literate",
    },
    {
      title: "Why Invest?",
      description:
        "Discover the benefits of investing and how it can help you achieve your financial goals.",
      href: "/investment-basics/why-should-you-invest",
    },
    {
      title: "When to Invest",
      description:
        "Understand the best times to start investing based on your financial situation.",
      href: "/investment-basics/when-should-you-invest",
    },
    {
      title: "How Much to Invest",
      description:
        "Learn how to determine the right amount to invest based on your income and goals.",
      href: "/investment-basics/how-much-should-you-invest",
    },
    {
      title: "Capital Markets",
      description:
        "Explore how capital markets work and their role in the investment ecosystem.",
      href: "/investment-basics/how-the-capital-market-works",
    },
    {
      title: "Transaction Costs",
      description:
        "Understand the various costs associated with investing and how to minimize them.",
      href: "/investment-basics/understanding-transaction-costs",
    },
    {
      title: "Risk & Return",
      description:
        "Learn about the relationship between risk and return in investment decisions.",
      href: "/investment-basics/risk-return-relationship",
    },
    {
      title: "Diversification",
      description:
        "Discover how diversifying your portfolio can help manage risk.",
      href: "/investment-basics/diversification",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Investing Basics</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Start your investment journey with these fundamental concepts that
            every investor should know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {topic.description}
                </CardDescription>
                <Button variant="link" className="p-0 text-blue-600" asChild>
                  <a href={topic.href}>
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
