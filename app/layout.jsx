import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Navbar/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Gen Blog Site",
  description: "Blog Site Using Next JS & Prisma. I have also used MongoDB as the Database for this website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-4 py-2 ">
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
