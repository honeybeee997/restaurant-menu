import { Lemonada } from "next/font/google";

import Layout from "~/components/layout";

export const metadata = {
  title: "Menu",
  description: "A restaurant menu",
  icons: {
    icon: "/assets/brand/favicon.ico",
  },
};

import "./globals.css";

const lemonada = Lemonada({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lemonada.className} text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
