import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bytespace - Build an online course in minutes",
  description: "Create & sell courses, downloads, and memberships to your audience. Trusted by thousands of creators worldwide.",
  keywords: [
    "online course platform",
    "course creation software",
    "sell courses online",
    "digital products",
    "membership site",
    " Bytespace",
  ],
  authors: [{ name: "Bytespace" }],
  creator: "Bytespace",
  publisher: "Bytespace",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
