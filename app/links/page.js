import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import ExternalLink from "../components/ExternalLink";

export default function LinksPage() {
  return (
    <>
      <h1>Links</h1>
      <p>
        If you have to leave <FontAwesomeIcon icon={faFaceSmile} />
        <br />I suggest you try out these sites.
      </p>
      <p>
        <ExternalLink href="https://www.starwars.com/">
          Star Wars Official Site
        </ExternalLink>
        <br />
        Galactic Empire: UK
        <br />
        <ExternalLink href="https://www.theforce.net/">
          TheForce.net
        </ExternalLink>
      </p>
      <p>
        Galactic Empire Gaming & RPG site
        <br />
        DewbackWing Europe
        <br />
        Pixel Masher
      </p>
    </>
  );
}
