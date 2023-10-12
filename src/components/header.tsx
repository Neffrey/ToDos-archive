"use client";

// LIBRARIES
import { useRef } from "react";

// UTILS
import { cn } from "~/lib/utils";

// COMPONENTS
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
      <div
        // Logo & Name Container
        className="flex items-center justify-start"
      >
        <h1 className="text-lg font-semibold text-primary-foreground sm:text-xl md:text-2xl lg:text-4xl">
          Starter Site
        </h1>
      </div>
      <Button variant={"secondary"} onClick={toggleDrawer}>
        Change Theme
      </Button>
    </div>
  );
};
export default Header;
