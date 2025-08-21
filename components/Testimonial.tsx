import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

// Testimonials Component
export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Retired Teacher",
      content:
        "The educational resources helped me understand how to manage my retirement portfolio effectively. I feel much more confident about my financial future.",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Young Professional",
      content:
        "As someone new to investing, the learning materials were invaluable. I've already seen positive returns on my first investments.",
      avatar: "/avatars/michael.jpg",
      rating: 5,
    },
    {
      name: "The Williams Family",
      role: "Family Investors",
      content:
        "We've been using these resources to teach our teenagers about financial literacy. The content is engaging and easy to understand.",
      avatar: "/avatars/williams.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hear from investors who have benefited from our educational
            resources and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <CardContent className="p-0">
                <p className="text-slate-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="h-12 w-12 bg-slate-200 rounded-full mx-auto mb-3"></div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
