import "@/styles/globals.css";
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
      <body className="mb-20">
        <Header />
        <div className="container">{children}</div>
      </body>
      <script
        defer
        data-domain="eliasschneider.com"
        src="https://analytics.eliasschneider.com/js/script.js"
      ></script>
    </html>
  );
}
