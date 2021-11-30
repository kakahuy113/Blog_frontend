import React from "react";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
interface AdminProps {
  children: React.ReactNode;
}

export const Admin: React.FC<AdminProps> = ({ children }) => {
  return (
    <>
      <Header />
      <h1>Admin</h1>
      {children}
      <Footer />
    </>
  );
};
