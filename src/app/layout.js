import { Lemonada } from "next/font/google";

import Layout from "~/components/layout";

export const metadata = {
  title: "Menu",
  description: "A restaurant menu",
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
