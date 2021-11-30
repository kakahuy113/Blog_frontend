import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
interface SiteProps {
  children: React.ReactNode;
}

export const Site: React.FC<SiteProps> = ({ children }) => {
  return (
    <>
      <Header />
      <h1>Sites</h1>
      {children}
      <Footer />
    </>
  );
};
