import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo List",
  description: "todo list application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
