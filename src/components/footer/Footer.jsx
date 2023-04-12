import github from "./../../assets/github.svg";
import instagram from "./../../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="foo">
      <nav className="foo__nav">
        <a
          href="https://github.com/JavierCarrasco08"
          title="Github"
          className="foo__enl"
          rel="referrer noopener"
          target="_blank">
          <img src={github} alt="Github" />
        </a>
        <a
          href="https://www.instagram.com/javier_carrasco08/?hl=es-la"
          title="Instagram"
          className="foo__enl"
          rel="referrer noopener"
          target="_blank">
          <img src={instagram} alt="Instagram" />
        </a>
      </nav>
    </footer>
  );
}
