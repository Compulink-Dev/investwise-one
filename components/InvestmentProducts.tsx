import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Package } from "lucide-react";

// Investment Products Component
export function InvestmentProducts() {
  const products = [
    {
      title: "Stocks",
      description: "Ownership shares in publicly traded companies",
      risk: "Medium to High",
    },
    {
      title: "Bonds",
      description:
        "Fixed income instruments representing loans to governments or corporations",
      risk: "Low to Medium",
    },
    {
      title: "Mutual Funds",
      description: "Pooled investments managed by professionals",
      risk: "Medium",
    },
    {
      title: "ETFs",
      description: "Exchange-traded funds that track indexes or sectors",
      risk: "Medium",
    },
    {
      title: "Real Estate",
      description: "Physical property or REITs for diversification",
      risk: "Medium",
    },
    {
      title: "Commodities",
      description: "Physical goods like gold, oil, or agricultural products",
      risk: "High",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
            <Package className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Investment Products</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore various investment vehicles to build a diversified portfolio
            that matches your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Risk Level:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.risk === "Low"
                        ? "bg-green-100 text-green-800"
                        : product.risk === "Low to Medium"
                        ? "bg-blue-100 text-blue-800"
                        : product.risk === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.risk}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
