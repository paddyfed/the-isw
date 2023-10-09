import Link from "next/link";

export default function MainMenu() {
  const menuItems = [
    { url: "/", linkText: "Main" },
    { url: "/member", linkText: "Members" },
    { url: "/join", linkText: "Join" },
    { url: "/editorials", linkText: "Editorial" },
    { url: "/rteguide", linkText: `RTÉ Guide` },
    { url: "/trivia", linkText: "Trivia" },
    { url: "/trivia_res", linkText: "Trivia Results" },
    { url: "/member_awards", linkText: "Trivia Table" },
    { url: "/poll", linkText: "Poll" },
    { url: "/pollresults", linkText: "Poll Results" },
    { url: "/links", linkText: "Links" },
    { url: "/linktous", linkText: "Link to Us" },
    { url: "/archive_news", linkText: "News Archives" },
    { url: "/contact", linkText: "Contact Me" },
  ];

  return (
    <nav>
      <h1>Menu</h1>
      <ul>
        {menuItems.map((menuLink, index) => {
          return (
            <li key={index}>
              <Link href={menuLink.url}>{menuLink.linkText}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
