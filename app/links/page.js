import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-regular-svg-icons";

export default function LinksPage() {
  return (
    <>
      <h1>Links</h1>
      <p>
        If you have to leave <FontAwesomeIcon icon={faFaceSmile} /> I suggest
        you try out these sites.
      </p>
      <p>
        <Link href="https://www.starwars.com/" target="_blank">
          Star Wars Official Site
        </Link>
        <br />
        Galactic Empire: UK
        <br />
        <Link href="https://www.theforce.net/" target="_blank">
          TheForce.net
        </Link>
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
