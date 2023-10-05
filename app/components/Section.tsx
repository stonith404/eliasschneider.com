import { ReactNode } from "react";

export default function Section({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-32">
      <h2 className="mb-2 text-center font-bold">{title}</h2>
      {subTitle && <p className="text-center text-gray-300">{subTitle}</p>}
      <div className="mt-10">{children}</div>
    </div>
  );
}
