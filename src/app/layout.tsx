// CSS
import "~/app/globals.css";

// LIBRARIES
import type { Metadata } from "next";
import { ReactNode } from "react";

// COMPONENTS
import HtmlWrapper from "~/components/html-wrapper";
import LightDarkProvider from "~/components/providers/light-dark-provider";
import ThemeDrawer from "~/components/themeDrawer";
import { Toaster } from "~/components/ui/toaster";
import UseOnRender from "~/components/hooks/useOnRender";
import LoadingSpinner from "~/components/ui/loading-spinner";

export const metadata: Metadata = {
  title: "Neffrey Starter",
  description: "Just a quick lil starter template",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <HtmlWrapper>
      <body>
        <UseOnRender
          fallback={
            <div className="absolute flex h-full w-full items-center justify-center bg-cyan-800 text-slate-50">
              <LoadingSpinner className="h-28 w-28" />
            </div>
          }
        >
          <LightDarkProvider>
            <ThemeDrawer />
            {children}
            <Toaster />
          </LightDarkProvider>
        </UseOnRender>
      </body>
    </HtmlWrapper>
  );
};

export default RootLayout;
