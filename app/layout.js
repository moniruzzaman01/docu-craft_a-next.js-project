import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Docu_Craft",
  description: "This is an documentation website created using next.js",
};

import { getDocuments } from "../lib/doc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocuments} />
          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex-auto py-12">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
