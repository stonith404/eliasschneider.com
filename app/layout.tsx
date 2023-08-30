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
        <div className="container">{children}</div>
        <Footer />
      </body>
      <Script
        data-website-id="891a59fe-fd0d-4f38-abd5-d9ede18ec7e1"
        async
        src="https://analytics.eliasschneider.com/script.js"
      />
    </html>
  );
}
