export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mt-24 mb-10 text-center">
      <p className="mb-2 text-sm">© {year} Elias Schneider</p>
    </div>
  );
}
