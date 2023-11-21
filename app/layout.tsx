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
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
      <Script
        defer
        data-domain="eliasschneider.com"
        src="https://analytics.eliasschneider.com/js/script.js"
      />
    </html>
  );
}
