"use client";

import Link from "next/link";
import { FC } from "react";
import { footerConfig } from "@/config";

import { Logo } from "../global";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const SiteFooter: FC = () => {
  const { description, mediaLinks, contact, navLinks, quickLinks } =
    footerConfig;

  return (
    <>
      <footer className="w-full bg-blue-500 text-white">
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
          <div className="space-y-4">
            <Logo variant="dark" />

            <p className="text-sm text-white/90">{description}</p>

            <div className="flex gap-2">
              {mediaLinks.map((link, i: number) => (
                <Link
                  key={i}
                  href={link.href}
                  className="rounded-full bg-white p-2 hover:bg-white/90"
                >
                  <link.Icon className="h-4 w-4 text-blue-500" />
                  <span className="sr-only">Twitter</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">{contact.title}</h3>
            <div className="space-y-2 text-sm">
              <p>{contact.mail}</p>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <nav className="flex flex-col gap-2 text-sm">
                {navLinks.map((link, i: number) => (
                  <Link key={i} className="hover:underline" href={link.url}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold invisible">Links</h3>
              <nav className="flex flex-col gap-2 text-sm">
                {quickLinks.map((link, i: number) => (
                  <Link key={i} className="hover:underline" href={link.url}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <form className="space-y-2">
              <input
                className="p-2 w-full rounded-md outline-none border-none bg-white/10 border-white/20 placeholder:text-white/50 focus:ring-1"
                placeholder="Enter email address.."
                type="email"
              />
              <Button
                className="w-full bg-white text-blue-500 hover:bg-white/90"
                type="submit"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container flex items-center justify-center gap-4 text-sm md:h-16">
            <p className="text-white/60">
              &copy; {new Date().getFullYear()}. All Rights Reserved - School
              Pro
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
