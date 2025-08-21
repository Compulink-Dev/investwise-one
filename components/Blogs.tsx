import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, FileText } from "lucide-react";

// Blogs Component
export function Blogs() {
  const blogPosts = [
    {
      title: "Market Trends in 2024",
      excerpt:
        "Analysis of emerging market trends and investment opportunities for the coming year.",
      date: "March 15, 2024",
      category: "Market Analysis",
    },
    {
      title: "Understanding Inflation's Impact on Investments",
      excerpt:
        "How inflation affects different asset classes and strategies to protect your portfolio.",
      date: "February 28, 2024",
      category: "Educational",
    },
    {
      title: "Retirement Planning Strategies",
      excerpt:
        "Essential steps to build a retirement portfolio that will sustain you through your golden years.",
      date: "February 15, 2024",
      category: "Planning",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
            <FileText className="h-6 w-6 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Stay informed with our latest insights, analysis, and educational
            content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="h-48 bg-slate-200"></div>
              <CardHeader>
                <div className="text-sm text-slate-500 mb-2">
                  {post.date} • {post.category}
                </div>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button variant="link" className="p-0 text-orange-600">
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
}
