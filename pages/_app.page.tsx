import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "../styles/globals.scss";
import { MobileNavbar } from "@/components/MobileNavbar";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import clsx from "clsx";

function MyApp({ Component, pageProps }: AppProps) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Husker"
        defaultTitle="Husker"
        description="Northeastern websites are bad"
      ></DefaultSeo>

      {!showSidebar && (
        <div className={clsx("block md:hidden")}>
          <MobileNavbar
            onMenuClick={() => {
              setShowSidebar(!showSidebar);
            }}
          ></MobileNavbar>
        </div>
      )}

      <main className={clsx("md:flex")}>
        <div className={clsx({ hidden: !showSidebar }, "md:block")}>
          <Sidebar onCloseClick={() => setShowSidebar(false)}></Sidebar>
        </div>
        <article className="wrapper">
          <Component {...pageProps} />
        </article>
      </main>
    </>
  );
}

export default MyApp;
