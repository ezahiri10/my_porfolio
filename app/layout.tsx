import type { Metadata } from "next";
import Navbar from "./compenents/Navbar";
import Footer from "./compenents/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mostapha-zahiri.com"),
  title: "Mostapha Zahiri | Full Stack Developer",
  description:
    "Full stack developer specializing in React, Next.js, and Node.js. Explore my projects and expertise in building scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Mostapha Zahiri" }],
  creator: "Mostapha Zahiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostapha-zahiri.com",
    title: "Mostapha Zahiri | Full Stack Developer",
    description:
      "Full stack developer specializing in React, Next.js, and Node.js.",
    images: [
      {
        url: "/Images/profile.png",
        width: 1200,
        height: 630,
        alt: "Mostapha Zahiri",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mostapha Zahiri",
              url: "https://mostapha-zahiri.com",
              jobTitle: "Full Stack Developer",
              image: "/Images/profile.png",
              sameAs: [
                "https://github.com/ezahiri10",
                "https://www.linkedin.com/in/el-mustapha-zahiri-a33760368/",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-black text-white">
        <Navbar />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
