"use client";

import Header from "./components/Header"; 
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Toaster
        position="top-right"
        toastOptions={{   
          duration: 3000,
          style: {
            background: "#2F2F2F",
            color: "#fff",
            borderRadius: "12px",
            padding: "14px 18px",
          },
        }}
      />   
          <main>{children}</main>
        
      <Footer />
    </>
  );
}