"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/config";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "../global";

export const SiteHeader: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showFeatures, setShowFeatures] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group h-9 w-max inline-flex items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-4">
                      <div className="flex items-center justify-between pb-2 mb-4 border-b">
                        <h4 className="text-lg font-medium">Features</h4>
                        <Link
                          href="/features"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          View All
                        </Link>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {navigationConfig.map((feature, index: number) => (
                          <Link
                            key={index}
                            href={feature.href}
                            className="block group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                <feature.Icon className="h-6 w-6 text-blue-500" />
                              </div>

                              <div className="">
                                <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium mb-1">Get started</h4>
                            <p className="text-sm text-muted-foreground">
                              Their food sources have decreased, and their
                              numbers
                            </p>
                          </div>
                          <Button variant="secondary" asChild>
                            <Link href="/contact-us">Get Started</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/#pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/how-it-works" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      How It Works
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact-us">Book Demo</Link>
            </Button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[90%] p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col my-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <button
                  className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      showFeatures && "rotate-180"
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="px-4 py-2 space-y-4">
                    {navigationConfig.map((feature, index) => (
                      <Link
                        key={index}
                        href={feature.href}
                        className="flex items-start gap-4 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="p-2 bg-muted rounded-md">
                          <feature.Icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                <Link
                  href="/#pricing"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                <div className="grid gap-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Log In
                  </Button>
                  <Button className="w-full" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};
