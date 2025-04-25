import { Sora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Footer from './components/footer';
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: "Divine Temple",
  description: "A spiritual sanctuary for peace and connection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}