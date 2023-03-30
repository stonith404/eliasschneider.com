export default function DevIcon({
  icon,
  size,
}: {
  icon: string;
  size: number;
}) {
  return (
    <i
      style={{
        fontSize: size,
      }}
      className={`devicon-${icon}`}
    ></i>
  );
}
