export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={"rounded-xl border-[1px] border-neutral-700 p-5 " + className}
    >
      {children}
    </div>
  );
}
