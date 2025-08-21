import { FileText, GamepadIcon } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

// Game Center Component
export function GameCenter() {
  const games = [
    {
      title: "Capital Market Quiz",
      description:
        "Test your knowledge of capital markets with our interactive quiz.",
      href: "/capital-market-basic-knowledge-quiz",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "Spot and Share",
      description:
        "Identify market trends and share your insights with the community.",
      href: "/spot-and-share",
      icon: <GamepadIcon className="h-8 w-8" />,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <GamepadIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Game Center</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn about investing through interactive games and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {games.map((game, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow p-6"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4 mx-auto">
                {game.icon}
              </div>
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6">
                  {game.description}
                </CardDescription>
                <Button asChild>
                  <a href={game.href}>Play Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
