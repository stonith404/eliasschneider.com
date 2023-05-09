import Link from "next/link";

export default function IconButton({
  children,
  className,
  ...linkProps
}: {
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={linkProps.href!}
      {...linkProps}
      className={"grid items-start justify-center gap-8 " + className}
    >
      <div className="group relative">
        <div className="animate-tilt absolute -inset-[0.1px] rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-100 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative rounded-lg bg-black p-3 leading-3 text-white">
          {children}
        </div>
      </div>
    </Link>
  );
}
