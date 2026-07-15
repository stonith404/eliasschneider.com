import DevIcon from "./DevIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mt-24 mb-10 flex justify-between">
      <p className="text-sm">{year} Elias Schneider</p>
      <a
        href="https://github.com/stonith404/eliasschneider.com"
        target="_blank"
        className="text-sm"
      >
        <DevIcon icon="github-original" size={20} />
        <span>&nbsp;Source Code</span>
      </a>
    </div>
  );
}
