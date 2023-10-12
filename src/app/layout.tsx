// CSS
import "~/app/globals.css";

// LIBRARIES
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ReactNode } from "react";

// COMPONENTS
import Footer from "~/components/footer";
import Header from "~/components/header";
import UseOnRender from "~/components/hooks/useOnRender";
import HtmlWrapper from "~/components/html-wrapper";
import LightDarkProvider from "~/components/providers/light-dark-provider";
import ThemeDrawer from "~/components/themeDrawer";
import LoadingSpinner from "~/components/ui/loading-spinner";
import { Toaster } from "~/components/ui/toaster";

export const metadata: Metadata = {
  title: "Neffrey Starter",
  description: "Just a quick lil starter template",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <HtmlWrapper>
        <body>
          <Header />
          <LightDarkProvider>
            <UseOnRender
              fallback={
                <div className="absolute flex h-full w-full items-center justify-center bg-cyan-800 text-slate-50">
                  <LoadingSpinner className="h-28 w-28" />
                </div>
              }
            >
              <ThemeDrawer />
              {children}
              <Toaster />
            </UseOnRender>
          </LightDarkProvider>
          <Footer />
        </body>
      </HtmlWrapper>
    </ClerkProvider>
  );
};

export default RootLayout;
