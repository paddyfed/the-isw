import Link from "next/link";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ExternalLink({ href, children }) {
  return (
    <Link href={href} passHref target="_blank">
      {children}
      <FontAwesomeIcon
        icon={faExternalLink}
        size="2xs"
        style={{ marginLeft: "0.5em" }}
      />
    </Link>
  );
}
