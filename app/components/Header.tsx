import Image from "next/image";

export default function Header() {
  return (
    <div className="container my-5">
      <div className="flex items-center">
        <Image
          height={40}
          width={40}
          src="/images/logo.png"
          alt="Elias Schneider Logo"
        />
        <h1 className="ml-2 text-2xl font-bold">
          <span className="hidden">E</span>lias Schneider
        </h1>
      </div>
    </div>
  );
}
