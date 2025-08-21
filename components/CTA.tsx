import React from "react";
import { Button } from "./ui/button";

// CTA Component
export function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Investment Journey Today
        </h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8">
          Join thousands of investors who are building wealth through informed
          decision-making and strategic planning.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Open an Account
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
