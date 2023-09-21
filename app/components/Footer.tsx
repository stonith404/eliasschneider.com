import DevIcon from "./DevIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="container mb-10 mt-24 flex justify-between">
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
