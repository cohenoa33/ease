import { Footer, Header, Navbar } from "../components";
import type { ReactNode } from "react";
import { WebData } from "../types";

export function Page({ children, webData }: PageProps) {
  return (
    <div className="page">
      <Header webData={webData} />
      <Navbar />
      {children}
      <Footer webData={webData} />
    </div>
  );
}

interface PageProps {
  children: ReactNode;
  webData: WebData;
}
