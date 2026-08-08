"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-300",
        scrolled
          ? "py-2.5 bg-white/90 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(28,25,23,0.2)]"
          : "py-[18px]"
      )}
    >
      <div className="container-ak flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-[30px] font-semibold text-[15px] text-ink">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative after:absolute after:left-0 after:bottom-1 after:w-0 after:h-0.5 after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="red" className="px-5">
            <Link href="/#contact">Start a Project</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] flex flex-col gap-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Logo />
            <nav className="flex flex-col gap-1 mt-4">
              {site.nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg font-semibold text-ink py-3 px-3 rounded-lg hover:bg-ivory-deep transition-colors"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <Button asChild variant="red" size="lg" className="mt-auto">
              <SheetClose asChild>
                <Link href="/#contact">Start a Project</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
