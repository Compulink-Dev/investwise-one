"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  BookOpen,
  TrendingUp,
  Shield,
  GamepadIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SearchInput from "./SearchInput";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [q, setQ] = useState(""); // 🔹 search query state
  const [loading, setLoading] = useState(false); // 🔹 loading state

  // Menu data structure
  const menuItems = [
    {
      title: "INVESTING BASICS",
      href: "/investment-basics",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
      items: [
        {
          title: "Being Financially Literate",
          href: "/investment-basics/being-financially-literate",
        },
        {
          title: "Why should you invest?",
          href: "/investment-basics/why-should-you-invest",
        },
        {
          title: "When should you invest?",
          href: "/investment-basics/when-should-you-invest",
        },
        {
          title: "How much should you invest?",
          href: "/investment-basics/how-much-should-you-invest",
        },
        {
          title: "How the capital market works",
          href: "/investment-basics/how-the-capital-market-works",
        },
        {
          title: "Understanding Transaction Costs",
          href: "/investment-basics/understanding-transaction-costs",
        },
        {
          title: "Risk / Return Relationship",
          href: "/investment-basics/risk-return-relationship",
        },
        {
          title: "Diversification",
          href: "/investment-basics/diversification",
        },
      ],
    },
    {
      title: "INVESTMENT PROCESS",
      href: "/investment-process",
      icon: <TrendingUp className="h-4 w-4 mr-2" />,
      items: [
        {
          title: "Diversify your Investments",
          href: "/investment-process/diversify-your-investments",
        },
        {
          title: "Know your licensed intermediaries",
          href: "/investment-process/know-your-licensed-intermediaries",
        },
        {
          title: "Knowing your Risk Profile",
          href: "/investment-process/knowing-your-risk-profile",
        },
        {
          title: "Portfolio Monitoring and Performance Evaluation",
          href: "/investment-process/portfolio-monitoring-and-performance-evaluation",
        },
        {
          title: "Setting Investment Objectives",
          href: "/investment-process/setting-investment-objectives",
        },
        {
          title: "Understand Investment Products",
          href: "/investment-process/understand-investment-products",
        },
      ],
    },
    {
      title: "PROTECTING YOUR INVESTMENT",
      href: "/protecting-your-investment",
      icon: <Shield className="h-4 w-4 mr-2" />,
      items: [
        {
          title: "Types of Investment Fraud",
          href: "/types-of-investment-fraud",
        },
        {
          title: "What you can do to avoid Investment Fraud",
          href: "/what-you-can-do-to-avoid-investment-fraud",
        },
        {
          title: "Red Flags for Investment Fraud",
          href: "/red-flags-for-investment-fraud",
        },
      ],
    },
    {
      title: "GAME CENTRE",
      href: "#",
      icon: <GamepadIcon className="h-4 w-4 mr-2" />,
      items: [
        {
          title: "Capital Market Basic Knowledge Quiz",
          href: "/capital-market-basic-knowledge-quiz",
        },
        { title: "Spot and Share", href: "/spot-and-share" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Image src={"/logo.webp"} alt="logo" width={100} height={100} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium h-9 bg-transparent data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
                    <span className="hidden lg:inline-block">{item.icon}</span>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.items.map((subItem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          href={subItem.href}
                          title={subItem.title}
                        ></ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search box */}
          <div className="w-80">
            <SearchInput
              value={q}
              onChange={setQ}
              onSearch={(v) => {
                setLoading(true);
                console.log("search:", v);
                setTimeout(() => setLoading(false), 600);
              }}
              loading={loading}
              placeholder="Search docs, people, anything…"
              debounce={300}
              size="md"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[200px] sm:w-[300px] p-4 overflow-auto"
          >
            <nav className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center font-medium py-2">
                    <span className="mr-2">{item.icon}</span>
                    {item.title}
                  </div>
                  <div className="flex flex-col gap-2 pl-6">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="text-sm text-muted-foreground hover:text-foreground py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
