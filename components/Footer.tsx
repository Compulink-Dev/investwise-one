import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="py-12 bg-zinc-900 text-zinc-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src={"/logo.webp"} alt="logo" width={150} height={150} />
            </div>
            <p className="mb-4 ">
              Your trusted partner for investment solutions in Zimbabwe.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-zinc-400"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs lg:text-sm">
              {["Home", "Services", "Research", "About Us", "Contact"].map(
                (item, j) => (
                  <li key={j}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Our Services</h4>
            <ul className="space-y-2 text-xs lg:text-sm">
              {[
                "Stockbroking",
                "Asset Management",
                "Advisory Services",
                "Private Equity",
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
            <h4 className="text-white font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3 text-xs lg:text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>123 Investment House, Harare, Zimbabwe</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+263 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@investwise.co.zw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-sm text-zinc-400 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} InvestWise Zimbabwe. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Disclaimers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
