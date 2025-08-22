"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Menu,
  X,
  ChevronDown,
  Play,
  Building2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { InvestingBasics } from "@/components/InvestmentBasic";
import { InvestmentProcess } from "@/components/InvestmentProcess";
import { InvestmentProtection } from "@/components/InvetsmentProtection";
import { InvestmentProducts } from "@/components/InvestmentProducts";
import { Blogs } from "@/components/Blogs";
import { GameCenter } from "@/components/GameCenter";
import { Testimonials } from "@/components/Testimonial";

export default function ModernHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "$50M+", label: "Assets Managed" },
  ];

  const services = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Stockbroking",
      description:
        "Access to Zimbabwe Stock Exchange and VFEX with expert advice on equity investments.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Asset Management",
      description:
        "Professional portfolio management tailored to your financial goals and risk appetite.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Advisory Services",
      description:
        "Personalized investment strategies to help you navigate the Zimbabwean market.",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Private Equity",
      description:
        "Investment opportunities in growing Zimbabwean businesses with high potential.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted Investment Partner in{" "}
                <span className="text-yellow-600">Zimbabwe</span>
              </h1>
              <p className="text-sm md:text-lg text-slate-600 mb-8">
                Expert financial solutions tailored to help you grow and protect
                your wealth in the Zimbabwean market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-colors flex items-center justify-center">
                  Open An Account <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5" /> Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-lg">ZSE Industrial Index</h3>
                    <p className="text-slate-500">Today's Performance</p>
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    +2.4%
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-3xl font-bold">18,642.21</h2>
                  <p className="text-yellow-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" /> +436.18 points
                  </p>
                </div>

                <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-700 w-2/3"></div>
                </div>

                <div className="flex justify-between text-sm text-slate-500 mb-6">
                  <span>Open: 18,206.03</span>
                  <span>High: 18,721.45</span>
                  <span>Low: 18,110.92</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-yellow-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-yellow-700 transition-colors">
                    View Stocks
                  </Button>
                  <Button className="border border-slate-300 py-2 rounded-lg font-medium text-sm hover:bg-slate-50 transition-colors">
                    Market Analysis
                  </Button>
                </div>
              </div>

              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur-lg opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-yellow-600">
                  {stat.value}
                </h3>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-slate-600">
              Comprehensive financial solutions designed for the Zimbabwean
              market to help you achieve your investment goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-yellow-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-yellow-600 mt-4 font-medium"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Market Research & Insights
              </h2>
              <p className="text-slate-600 mb-6 text-xs lg:text-sm">
                Stay informed with our expert analysis of the Zimbabwean market.
                Our research team provides timely insights to help you make
                informed investment decisions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Daily market reports",
                  "Weekly economic analysis",
                  "Company research reports",
                  "Sector-specific insights",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-yellow-100 rounded-full p-1 mr-3">
                      <div className="bg-yellow-600 rounded-full h-2 w-2"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-700 transition-colors">
                Access Research Portal
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-10"
            >
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Latest Market Report
                </h3>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">
                    Zimbabwe Market Update
                  </h4>
                  <p className="mb-4">
                    Analysis of recent market trends and investment
                    opportunities in the current economic climate.
                  </p>
                  <div className="text-sm opacity-80">
                    Published: {new Date().toLocaleDateString()}
                  </div>
                </div>
                <Button className="bg-white text-yellow-700 px-4 py-2 rounded-lg font-medium hover:bg-yellow-50 transition-colors">
                  Download Report
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <InvestingBasics />
      <InvestmentProcess />
      <InvestmentProtection />
      <InvestmentProducts />
      <Blogs />
      <GameCenter />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to start your investment journey?
            </h2>
            <p className="text-yellow-100 max-w-2xl mx-auto mb-8">
              Join hundreds of satisfied clients who trust us with their
              investments in Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-white text-yellow-700 px-6 py-3 rounded-lg font-medium hover:bg-yellow-50 transition-colors">
                Open An Account
              </Button>
              <Button className="bg-transparent border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
