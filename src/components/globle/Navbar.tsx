"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center  mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Instaflow</span>
        </Link>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link href="/about" className="text-lg font-medium">
                About Us
              </Link>
              <Link href="/features" className="text-lg font-medium">
                Features
              </Link>
              <Link href="/pricing" className="text-lg font-medium">
                Pricing
              </Link>
              <Link href="/resources" className="text-lg font-medium">
                Resources
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="w-full">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="w-full">Register</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <Link href="/features" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Features Overview
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Discover all the powerful features Instaflow has to offer.
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Automation</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Automate your workflow with powerful tools
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/features/analytics" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Analytics</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get insights into your performance
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li>
                    <Link href="/resources/documentation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Documentation</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn how to use Instaflow
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Blog</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Read the latest updates and articles
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

