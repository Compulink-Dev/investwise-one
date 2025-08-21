"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  BookOpen,
  Landmark,
  Boxes,
  BadgeDollarSign,
  Factory,
  Layers,
  Building2,
  BarChart3,
  Info,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import SearchInput from "@/components/SearchInput";

// ---- Data ---------------------------------------------------------------

type Product = {
  id: string;
  title: string;
  excerpt: string;
  body: string;
  icon: React.ReactNode;
  tags: string[];
  href?: string;
  subItems?: { title: string; body: string }[];
};

const PRODUCTS: Product[] = [
  {
    id: "private-equity",
    title: "Private Equity",
    excerpt:
      "Pooled long‑term capital invested in high‑growth private companies to improve profitability and exit at a profit.",
    body: "Private equity is pooled long‑term capital invested in potentially high‑growth privately held companies. A private equity firm manages funds that support promising businesses (portfolio companies). The goal is to improve profitability and exit at a profit. Typical investors include institutions and high‑net‑worth individuals. Sources include angel investment, venture capital, growth/development capital, and leveraged buy‑in/out replacement capital.",
    icon: <BookOpen className="h-5 w-5 text-yellow-600" />,
    tags: ["Long-term", "Private", "Active ownership"],
  },
  {
    id: "asset-backed-securities",
    title: "Asset‑Backed Securities (ABS)",
    excerpt:
      "Structured securities backed by pools of loans/receivables; performance depends on underlying asset cash flows.",
    body: "Asset‑Backed Securities (ABS) are created by pooling assets like auto loans, credit card receivables, or mortgages and issuing securities backed by those cash flows. While mortgage‑backed securities (MBS) are often separated as a category, by definition they are a type of ABS.",
    icon: <Boxes className="h-5 w-5 text-purple-600" />,
    tags: ["Structured", "Securitization", "Cash‑flow backed"],
  },
  {
    id: "bonds",
    title: "Bonds",
    excerpt:
      "Debt securities where investors lend to issuers for coupons plus principal at maturity.",
    body: "A bond is a debt security. The investor lends to the issuer by purchasing the bond; in return, the issuer pays coupons during the life of the bond and repays principal at maturity. Terms are set out in the indenture or offering documents.",
    icon: <Landmark className="h-5 w-5 text-green-600" />,
    tags: ["Fixed income", "Coupon", "Maturity"],
  },
  {
    id: "commodity-funds",
    title: "Commodity Funds",
    excerpt:
      "Schemes that invest in commodities directly or via futures; useful for diversification but can be volatile.",
    body: "Commodity funds invest in or hold commodities such as metals, energy, and agricultural products. Exposure may be direct (holding the commodity) or via futures contracts, which introduce leverage and roll dynamics.",
    icon: <Factory className="h-5 w-5 text-amber-600" />,
    tags: ["Diversification", "Hard & soft commodities"],
    subItems: [
      {
        title: "Natural Resource Funds",
        body: "Invest in companies engaged in commodity‑related businesses (e.g., energy, mining, agriculture).",
      },
      {
        title: "Commodity Futures Funds",
        body: "Gain exposure via futures across commodities; often uncorrelated with traditional assets but higher risk.",
      },
      {
        title: "Pure Commodity Funds",
        body: "Hold the underlying commodity directly (e.g., a gold fund holding bullion).",
      },
    ],
  },
  {
    id: "etfs",
    title: "Exchange‑Traded Funds (ETFs)",
    excerpt:
      "Pooled vehicles whose shares track baskets of assets and trade intraday near NAV.",
    body: "ETFs hold baskets of assets (equities, bonds, commodities, currencies). Shares trade intraday on exchanges and generally track net asset value (NAV) through creation/redemption mechanisms.",
    icon: <Layers className="h-5 w-5 text-red-600" />,
    tags: ["Passive/Active", "Intraday trading", "Diversified"],
  },
  {
    id: "reits",
    title: "Real Estate Investment Trusts (REITs)",
    excerpt:
      "Companies or trusts that own or finance income‑producing real estate and distribute income to investors.",
    body: "REITs own, operate, or finance income‑producing real estate across sectors such as commercial, retail, and industrial. They typically invest in mature properties and distribute a significant share of income to holders.",
    icon: <Building2 className="h-5 w-5 text-teal-600" />,
    tags: ["Property", "Income", "Listed/Unlisted"],
  },
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    excerpt:
      "Companies that pool investors' money to buy diversified portfolios of securities.",
    body: "Mutual funds pool capital from many investors and allocate it to portfolios of stocks, bonds, and money‑market instruments. Investors own shares representing proportional ownership of the fund's assets and income.",
    icon: <BarChart3 className="h-5 w-5 text-indigo-600" />,
    tags: ["Pooled", "Diversified", "Open‑end"],
  },
];

// ---- Helpers ------------------------------------------------------------

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: "easeOut" },
};

function HighlightTag({ label }: { label: string }) {
  return (
    <Badge
      variant="secondary"
      className="rounded-full bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    >
      {label}
    </Badge>
  );
}

// ---- Page ---------------------------------------------------------------

export default function InvestProductsPage() {
  const [q, setQ] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const filtered = React.useMemo(() => {
    if (!q.trim()) return PRODUCTS;
    const s = q.toLowerCase();
    return PRODUCTS.filter((p) =>
      [p.title, p.excerpt, p.body, ...(p.tags || [])].some((t) =>
        t.toLowerCase().includes(s)
      )
    );
  }, [q]);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white px-4 md:px-0">
        {/* Breadcrumbs */}
        <div className="container mx-auto pt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-slate-700">
                  Investment Products
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero */}
        <section className="container mx-auto py-8">
          <div className="grid gap-6 md:grid-cols-[1fr_380px] items-start">
            <motion.div {...fadeIn} className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-yellow-700 to-slate-800 bg-clip-text text-transparent">
                Explore Investment Products
              </h1>
              <p className="text-slate-600 max-w-prose">
                Learn the building blocks of diversified portfolios—from bonds
                and ETFs to private equity and REITs. Use the search to jump
                straight to what you need.
              </p>
              <div className="w-full max-w-xl">
                <SearchInput
                  value={q}
                  onChange={setQ}
                  onSearch={() => setLoading(false)}
                  loading={loading}
                  placeholder="Search products, terms, characteristics…"
                  debounce={250}
                />
                <p className="mt-2 text-xs text-slate-500">
                  Tip: Press Ctrl/Cmd + K to focus the search.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Diversification",
                  "Income",
                  "Long-term",
                  "Structured",
                  "Property",
                ].map((t) => (
                  <Button
                    key={t}
                    size="sm"
                    variant="secondary"
                    className="rounded-full bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200"
                    onClick={() => setQ(t)}
                  >
                    #{t}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Sticky quick nav */}
            <motion.aside {...fadeIn} className="md:sticky md:top-24">
              <Card className="rounded-2xl shadow-sm border-yellow-100 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-base text-yellow-900">
                    Quick Navigation
                  </CardTitle>
                  <CardDescription className="text-yellow-700">
                    Jump to a product type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[280px] pr-2">
                    <div className="space-y-1">
                      {PRODUCTS.map((p) => (
                        <Link
                          key={p.id}
                          href={`#${p.id}`}
                          className="group flex items-center justify-between rounded-xl px-3 py-2 hover:bg-yellow-100 transition-colors"
                        >
                          <div className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="opacity-70">{p.icon}</span>
                            {p.title}
                          </div>
                          <ChevronRight className="h-4 w-4 opacity-50 group-hover:translate-x-0.5 transition-transform text-yellow-600" />
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.aside>
          </div>
        </section>

        <Separator className="container mx-auto bg-yellow-100" />

        {/* Content Grid */}
        <section className="container mx-auto py-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            {/* Main */}
            <div className="space-y-6">
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.id}
                  id={p.id}
                  {...fadeIn}
                  transition={{ ...fadeIn.transition, delay: idx * 0.03 }}
                >
                  <Card className="rounded-2xl border-slate-200 hover:border-yellow-200 transition-colors shadow-sm hover:shadow-md">
                    <CardHeader className="flex flex-row items-start gap-4 bg-slate-50 rounded-t-2xl">
                      <div className="mt-1">{p.icon}</div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl md:text-2xl text-slate-800">
                          {p.title}
                        </CardTitle>
                        <CardDescription className="text-slate-600">
                          {p.excerpt}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {p.tags.map((t) => (
                            <HighlightTag key={t} label={t} />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm leading-7 text-slate-700">
                        {p.body}
                      </p>

                      {p.subItems && (
                        <Accordion type="single" collapsible className="w-full">
                          {p.subItems.map((si, i) => (
                            <AccordionItem
                              key={i}
                              value={`item-${i}`}
                              className="border-slate-200"
                            >
                              <AccordionTrigger className="text-left text-slate-700 hover:text-yellow-700">
                                {si.title}
                              </AccordionTrigger>
                              <AccordionContent>
                                <p className="text-sm text-slate-600">
                                  {si.body}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}

                      <div className="flex items-center gap-3 pt-1">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              asChild
                              variant="outline"
                              className="rounded-xl border-yellow-200 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800"
                            >
                              <Link href={`/${p.id}`}>Learn more</Link>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            Open the {p.title} guide
                          </TooltipContent>
                        </Tooltip>
                        <Button
                          variant="ghost"
                          className="rounded-xl text-slate-600 hover:text-yellow-700 hover:bg-yellow-50"
                          asChild
                        >
                          <Link href={`#top`}>
                            Back to top <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <Card className="rounded-2xl border-yellow-100 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-slate-800">No results</CardTitle>
                    <CardDescription className="text-slate-600">
                      Try another search term.
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </div>

            {/* Sidebar Enhancements */}
            <div className="space-y-6">
              <motion.div {...fadeIn}>
                <Card className="rounded-2xl border-yellow-100">
                  <CardHeader className="bg-yellow-50 rounded-t-2xl">
                    <CardTitle className="text-base text-yellow-900">
                      Compare at a glance
                    </CardTitle>
                    <CardDescription className="text-yellow-700">
                      Risk / Return / Liquidity
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="risk" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 bg-slate-100">
                        <TabsTrigger
                          value="risk"
                          className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white"
                        >
                          Risk
                        </TabsTrigger>
                        <TabsTrigger
                          value="return"
                          className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white"
                        >
                          Return
                        </TabsTrigger>
                        <TabsTrigger
                          value="liquidity"
                          className="data-[state=active]:bg-yellow-600 data-[state=active]:text-white"
                        >
                          Liquidity
                        </TabsTrigger>
                      </TabsList>
                      <TabsContent value="risk" className="pt-3">
                        <ul className="text-sm space-y-2 text-slate-700">
                          <li>
                            <b>Private Equity</b>: High (illiquid, concentrated)
                          </li>
                          <li>
                            <b>Bonds</b>: Low–Medium (varies by credit)
                          </li>
                          <li>
                            <b>ETFs</b>: Low–Medium (diversified, market risk)
                          </li>
                          <li>
                            <b>REITs</b>: Medium (property cycles)
                          </li>
                          <li>
                            <b>Commodity Funds</b>: Medium–High (volatility)
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="return" className="pt-3">
                        <ul className="text-sm space-y-2 text-slate-700">
                          <li>
                            <b>Private Equity</b>: Potentially high, long
                            horizon
                          </li>
                          <li>
                            <b>Bonds</b>: Coupons + principal
                          </li>
                          <li>
                            <b>ETFs</b>: Market‑linked
                          </li>
                          <li>
                            <b>REITs</b>: Income + appreciation
                          </li>
                          <li>
                            <b>Commodity Funds</b>: Cyclical/Trend‑driven
                          </li>
                        </ul>
                      </TabsContent>
                      <TabsContent value="liquidity" className="pt-3">
                        <ul className="text-sm space-y-2 text-slate-700">
                          <li>
                            <b>ETFs</b>: Intraday liquidity
                          </li>
                          <li>
                            <b>Bonds</b>: Secondary markets vary
                          </li>
                          <li>
                            <b>REITs</b>: Listed often liquid
                          </li>
                          <li>
                            <b>Private Equity</b>: Illiquid until exit
                          </li>
                          <li>
                            <b>Commodity Funds</b>: Varies by structure
                          </li>
                        </ul>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeIn}>
                <Card className="rounded-2xl border-dashed border-yellow-200 bg-yellow-50/50">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2 text-yellow-900">
                      <Info className="h-4 w-4" /> Getting started
                    </CardTitle>
                    <CardDescription className="text-yellow-700">
                      Simple path to your first allocation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                      <li>Define your objectives and horizon.</li>
                      <li>Assess risk tolerance and liquidity needs.</li>
                      <li>Diversify across product types.</li>
                      <li>Prefer regulated, licensed intermediaries.</li>
                      <li>Review costs, taxes, and re‑balance periodically.</li>
                    </ol>
                    <div className="pt-2 flex gap-2">
                      <Button
                        asChild
                        className="rounded-xl bg-yellow-600 hover:bg-yellow-700"
                      >
                        <Link href="/investment-process/setting-investment-objectives">
                          Set Objectives
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-xl border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                      >
                        <Link href="/investment-process/knowing-your-risk-profile">
                          Know Your Risk
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto py-10">
          <Card className="rounded-2xl border-yellow-200 bg-gradient-to-r from-yellow-50 to-slate-100">
            <CardContent className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-slate-800">
                  Ready to dive deeper?
                </h3>
                <p className="text-sm text-slate-600">
                  Explore in‑depth guides, example portfolios, and tools.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  className="rounded-xl bg-yellow-600 hover:bg-yellow-700"
                >
                  <Link href="/learn">Go to Learning Hub</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-yellow-300 text-yellow-700 hover:bg-yellow-100"
                >
                  <Link href="/tools">See Tools</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </TooltipProvider>
  );
}
