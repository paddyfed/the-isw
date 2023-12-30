export default function Members() {
  const memberGroups = [
    { title: "Creator", members: ["PaddyFedoo"] },
    {
      title: "August 2000",
      members: [
        "Mollyjedi",
        "Tipplehilti",
        "YamaDarma",
        "Steve McNally",
        "Sabb",
      ],
    },
    { title: "September 2000", members: ["Mike Farnham", "Balzacamadeus"] },
    {
      title: "October 2000",
      members: [
        "Niamh",
        "Ger",
        "Jade",
        "Rob Dalton",
        "PhantomShadow",
        "Sparky",
        "Jonathan",
      ],
    },
    { title: "November 2000", members: ["Stev Adams", "Hans Solo"] },
    { title: "December 2000", members: ["Gold Leader"] },
    {
      title: "January 2001",
      members: ["Rob Hoitt", "Seamus McQuaid", "Liones"],
    },
    { title: "March 2001", members: ["Steve Boyle"] },
    { title: "April 2001", members: ["Paul", "John O'Connell"] },
    { title: "May 2001", members: ["Sarah Harris"] },
    { title: "June 2001", members: ["Kerry Mullins"] },
    { title: "July 2001", members: ["Euan McGregor"] },
    { title: "August 2001", members: ["Eamonn Reilly"] },
    { title: "October 2001", members: ["Arad Skywalker"] },
    { title: "January 2002", members: ["Sean M", "Colin"] },
    { title: "February 2002", members: ["Brendan McLeary"] },
    { title: "May 2002", members: ["Exar Kun"] },
    { title: "June 2002", members: ["Nero"] },
    { title: "July 2002", members: ["Naga Sadow"] },
    { title: "August 2002", members: ["Nick Murdoch", "Maz"] },
    { title: "October 2002", members: ["Barry"] },
  ];
  return (
    <>
      <h1>Members</h1>
      <article className="members">
        {memberGroups.map((memberGroup, index) => {
          return (
            <section key={index}>
              <h1>{memberGroup.title}</h1>
              {memberGroup.members.map((member, index) => {
                return <p key={index}>{member}</p>;
              })}
            </section>
          );
        })}
      </article>
    </>
  );
}
