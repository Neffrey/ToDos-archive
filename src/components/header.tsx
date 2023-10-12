"use client";

// LIBRARIES
import { useRef } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

// UTILS
import { cn } from "~/lib/utils";

// COMPONENTS
import NeffreyLogo from "~/components/svgs/NeffreyLogo";
import { Button } from "~/components/ui/button";
import useThemeStore from "~/components/stores/themeStore";
import useStickyScrollUp from "~/components/hooks/useStickyScrollUp";

// FC
const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { toggleDrawer } = useThemeStore();

  return (
    <div
      // Row Container
      ref={headerRef}
      className={cn(
        "flex h-[75px] w-full items-center justify-between border-b-4 border-primary-foreground bg-primary px-5 py-3",
        useStickyScrollUp({
          enableBelowWidth: 1024,
          elementHeight: headerRef.current?.clientHeight,
        }),
      )}
    >
      <Link
        // Logo & Name Container
        className="flex items-center justify-start gap-6"
        href="/"
      >
        <div
          // Logo Container
          className="h-12 w-12 cursor-pointer fill-secondary-foreground"
        >
          <NeffreyLogo />
        </div>
        <h1 className="text-lg font-semibold text-primary-foreground sm:text-xl md:text-2xl lg:text-4xl">
          Starter Site
        </h1>
      </Link>
      <div
        // Logo & Name Container
        className="flex items-center justify-start gap-6"
      >
        <Button variant={"secondary"} onClick={toggleDrawer}>
          Change Theme
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
