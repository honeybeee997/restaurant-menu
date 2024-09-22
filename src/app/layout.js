import { Lemonada } from "next/font/google";

import "./globals.css";
import Layout from "~/components/layout";

export const metadata = { title: "Menu", description: "A restaurant menu" };

const playfair = Lemonada({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} text-white`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
