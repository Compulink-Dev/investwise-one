"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Fake bot response (replace with API call to GPT or other backend)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot" as const, text: "Thanks for your question! 😊" },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-2xl flex flex-col overflow-hidden border">
          {/* Header */}
          <div className="flex items-center justify-between p-3 bg-primary text-white">
            <span className="font-semibold">Investwise Chatbot</span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.from === "user"
                    ? "ml-auto bg-primary text-white"
                    : "mr-auto bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      ) : (
        <Button
          size="icon"
          className="rounded-full shadow-lg h-14 w-14 bg-primary text-white hover:bg-primary/90"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
