// LIBRARIES
import Link from "next/link";

// COMPONENTS
import Header from "~/components/header";
import { Button } from "~/components/ui/button";
import ChevronDown from "~/components/svgs/ChevronDown";
import LdThemeSwitch from "~/components/ld-theme-switch";
import ColorThemeSwitch from "~/components/color-theme-switch";
import CompTests from "~/components/component-tests/all-comp-tests";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <div
        // HERO ROW
        className="flex w-full flex-col items-center justify-center gap-12 bg-gradient-to-br from-secondary to-secondary/50 px-4 py-16"
      >
        <div className="flex flex-col gap-5">
          <h1 className="w-full text-center text-5xl font-extrabold tracking-wider text-secondary-foreground sm:text-[5rem]">
            {`Neffrey's starter`}
          </h1>
          <h2 className="w-full text-center text-xl tracking-wider text-secondary-foreground">
            Just a quick little site with theming
          </h2>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Link href="/" passHref tabIndex={-1}>
            <Button
              size={"lg"}
              variant={"default"}
              className="rounded-xl px-8 py-5 text-xl font-bold"
            >
              Button 1
            </Button>
          </Link>
          <Link href="/" passHref tabIndex={-1}>
            <Button
              size={"lg"}
              variant={"default"}
              className="text rounded-xl px-8 py-5 text-xl font-bold"
            >
              Button 2
            </Button>
          </Link>
        </div>
        <Link
          // Scroll down chevron
          href="./#"
          className="mb-2 h-12 w-12 cursor-pointer text-6xl transition ease-linear hover:mb-0 hover:h-14 hover:w-14 hover:-translate-y-1 hover:scale-105"
          passHref
        >
          <ChevronDown className="fill-secondary-foreground" />
        </Link>
      </div>
      <CompTests />
      <div
        // 3RD ROW
        className="flex w-full flex-col items-center gap-20 bg-gradient-to-br from-neutral-100 to-neutral-200 p-20"
      >
        <div className="flex flex-col gap-10 text-slate-700">
          <h2 className="w-full text-center text-3xl">LOGIN TESTING</h2>
        </div>
      </div>
    </main>
  );
};

export default Home;
