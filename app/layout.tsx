import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/model-provider";
import { ToasterProvider } from "@/providers/toast-provider";

const ubuntu = Ubuntu({
  subsets: ["latin-ext"],
  style:"normal",
  weight: [ "300","400","500", "700"],
});

export const metadata: Metadata = {
  title: "ECommerce-CMS",
  description: "Admin Dashboard for ECommerce CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ubuntu.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
