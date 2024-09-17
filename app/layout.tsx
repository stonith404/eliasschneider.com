import "@/styles/globals.css";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
      </head>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
      <Script
        defer
        src="https://analytics.eliasschneider.com/script.js"
        data-website-id="c1d09d7d-3909-4c6e-b9c5-d48877de5540"
      />
    </html>
  );
}
