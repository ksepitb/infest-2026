import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { PageTransition } from "@/components/page-transition";
import { SmoothScrolling } from "@/components/smooth-scrolling";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "INFEST 2026",
  description: "Investment Festival 2026, KSEP ITB",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} bg-black text-white`}
    >
      <body className="bg-black text-white antialiased">
        <TRPCReactProvider>
          <SmoothScrolling>
            <PageTransition>{children}</PageTransition>
          </SmoothScrolling>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
