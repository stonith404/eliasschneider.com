import { ReactNode } from "react";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-32">
      <h2 className="mb-10 text-center font-bold">{title}</h2>
      {children}
    </div>
  );
}
