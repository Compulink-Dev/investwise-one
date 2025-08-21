"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Search,
  Calendar,
  User,
  Download,
  FileText,
  Image,
  Video,
  Newspaper,
  BarChart3,
  Filter,
  ChevronDown,
  Play,
  Eye,
  Share2,
  BookOpen,
  Mic,
  Camera,
  Phone,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MediaCenter() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Media categories
  const categories = [
    { id: "all", label: "All Media", icon: <Newspaper className="h-4 w-4" /> },
    {
      id: "press",
      label: "Press Releases",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "news",
      label: "News Articles",
      icon: <Newspaper className="h-4 w-4" />,
    },
    { id: "images", label: "Images", icon: <Image className="h-4 w-4" /> },
    { id: "videos", label: "Videos", icon: <Video className="h-4 w-4" /> },
    {
      id: "reports",
      label: "Reports",
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ];

  // Sample media items
  const mediaItems = [
    {
      id: 1,
      title: "Q4 2023 Financial Results Announcement",
      type: "press",
      date: "2024-01-25",
      description:
        "InvestWise Zimbabwe announces strong financial results for the fourth quarter of 2023, with a 15% increase in assets under management.",
      image: "/placeholder-image.jpg",
      downloads: [
        { name: "Full Report (PDF)", url: "#", size: "2.4MB" },
        { name: "Press Release", url: "#", size: "1.2MB" },
      ],
      tags: ["Financials", "Earnings", "Quarterly Results"],
    },
    {
      id: 2,
      title: "New Investment Products Launch",
      type: "news",
      date: "2024-01-18",
      description:
        "InvestWise introduces three new investment products designed specifically for the Zimbabwean market, offering diversified opportunities for investors.",
      image: "/placeholder-image.jpg",
      downloads: [{ name: "Product Brochure", url: "#", size: "3.1MB" }],
      tags: ["Products", "Innovation", "Market Expansion"],
    },
    {
      id: 3,
      title: "Market Analysis: Zimbabwe Economic Outlook 2024",
      type: "reports",
      date: "2024-01-10",
      description:
        "Comprehensive analysis of Zimbabwe's economic prospects for 2024, with sector-specific insights and investment recommendations.",
      image: "/placeholder-image.jpg",
      downloads: [
        { name: "Full Report", url: "#", size: "5.7MB" },
        { name: "Executive Summary", url: "#", size: "1.8MB" },
      ],
      tags: ["Research", "Economic Outlook", "Market Analysis"],
    },
    {
      id: 4,
      title: "CEO Interview on Business Focus",
      type: "videos",
      date: "2024-01-05",
      description:
        "Our CEO discusses investment opportunities in Zimbabwe and the company's growth strategy in an exclusive television interview.",
      image: "/placeholder-image.jpg",
      videoUrl: "#",
      duration: "15:42",
      tags: ["Leadership", "Interview", "Strategy"],
    },
    {
      id: 5,
      title: "Corporate Responsibility Initiative Launch",
      type: "press",
      date: "2023-12-15",
      description:
        "InvestWise launches a new financial literacy program aimed at empowering youth in underserved communities across Zimbabwe.",
      image: "/placeholder-image.jpg",
      downloads: [
        { name: "Press Release", url: "#", size: "1.5MB" },
        { name: "Program Overview", url: "#", size: "2.2MB" },
      ],
      tags: ["CSR", "Education", "Community"],
    },
    {
      id: 6,
      title: "Company Headquarters Gallery",
      type: "images",
      date: "2023-12-10",
      description:
        "High-resolution images of our new headquarters in Harare, featuring state-of-the-art facilities and sustainable design elements.",
      image: "/placeholder-image.jpg",
      downloads: [{ name: "Image Pack (ZIP)", url: "#", size: "18.3MB" }],
      tags: ["Facilities", "Corporate", "Architecture"],
    },
  ];

  // Filter media items based on category and search query
  const filteredItems = mediaItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.type === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Press contacts
  const pressContacts = [
    {
      name: "Tendai Moyo",
      title: "Head of Communications",
      email: "tendai.moyo@investwise.co.zw",
      phone: "+263 123 456 789",
    },
    {
      name: "Sarah Chikwava",
      title: "Media Relations Manager",
      email: "sarah.chikwava@investwise.co.zw",
      phone: "+263 987 654 321",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-slate-900">Media Center</h1>
          <p className="text-slate-600 mt-2">
            Access press releases, news, multimedia content, and resources for
            journalists.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search media content..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">
                Filter by:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      activeCategory === category.id ? "default" : "outline"
                    }
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.icon}
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Latest Media</h2>

          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">
                No media items found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-slate-200 relative">
                    {item.type === "videos" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/30 rounded-full p-4">
                          <Play className="h-8 w-8 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="capitalize">
                        {item.type}
                      </Badge>
                      <span className="text-sm text-slate-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-1" /> Share
                      </Button>
                    </div>
                    {item.downloads && (
                      <Button variant="default" size="sm">
                        <Download className="h-4 w-4 mr-1" /> Download
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Press Contacts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Press Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pressContacts.map((contact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{contact.name}</CardTitle>
                  <CardDescription>{contact.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-slate-500" />
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-yellow-600 hover:underline"
                      >
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-slate-500" />
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-yellow-600 hover:underline"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Media Resources */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-yellow-100 p-3 rounded-full w-fit">
                  <BookOpen className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Company Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Download our latest company profile with information about our
                  history, leadership, and services.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" /> Download PDF
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 p-3 rounded-full w-fit">
                  <Image className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Media Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access our media kit containing logos, brand guidelines, and
                  high-resolution images for publications.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" /> Download Kit
                </Button>
              </CardFooter>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-purple-100 p-3 rounded-full w-fit">
                  <Mic className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Interview Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Request an interview with our executives or subject matter
                  experts for your publication.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Camera className="h-4 w-4 mr-2" /> Request Interview
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-slate-600 mb-6">
              Subscribe to our media mailing list to receive press releases and
              updates directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Your email address" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              You can unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                InvestWise Zimbabwe
              </h3>
              <p className="mb-4">
                Your trusted partner for investment solutions in the Zimbabwean
                market.
              </p>
              <div className="flex space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center"
                  >
                    <div className="h-3 w-3 rounded-full bg-slate-400"></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Press Releases",
                  "News Articles",
                  "Media Resources",
                  "Contact Us",
                ].map((item, j) => (
                  <li key={j}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  "Privacy Policy",
                  "Terms of Use",
                  "Disclaimer",
                  "Copyright",
                ].map((item, j) => (
                  <li key={j}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-slate-400 text-center">
            <p>
              © {new Date().getFullYear()} InvestWise Zimbabwe. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
