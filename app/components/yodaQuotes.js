const quotes = [
  "May the force be with you.",
  "No! No different! Only different in your mind.",
  "Hard to see, the dark side is.",
  "When nine hundred years old you reach, look as good you will not. Hmm?",
  "Mudhole? Slimy? My home this is.",
  "No! Try not. Do. Or do not. There is no try.",
  "Our own council we will keep on who is ready.",
  "Your weapons...you will not need them.",
  "Life creates it, makes it grow. It's energy surrounds us and binds us.",
  "I sense much fear in you.",
  "A Jedi's strength flows from the force.",
  "Away with your weapon! I mean you no harm.",
  "Oohhh. Jedi Master. Yoda. You seek Yoda.",
  "Confer on you, the level of Jedi Knight the Council does.",
  "Hmm. That face you make. Look I so old to young eyes?",
  "Help you I can, yes.",
  "A Jedi uses the Force for knowledge and defense, never for attack.",
  "You must feel the Force around you.",
  "A Jedi must have the deepest commitment, the most serious mind.",
  "You must unlearn what you have learned.",
  "Always two there are....no more...no less. A master and an apprentice.",
  "Always with you it cannot be done.",
  "Fear leads to anger, anger leads to hate, hate leads to suffering.",
  "Only a fully trained Jedi Knight with the Force as his ally will conquer.",
  "Not far. Yoda not far. Patience. Soon you will be with him.",
  "Patience! For the Jedi it is time to eat as well.",
  "Through the Force, things you will see. Other places.",
  "I am wondering, why are you here.",
  "Looking? Found someone you have I would say.",
  "Ready, are you? What know you of ready?",
  "Anger...fear...aggression. The dark side of the Force are they.",
  "Fear is the path to the dark side.",
  "For my ally is the Force. And a powerful ally it is.",
  "Hey, dude!",
];

export default function YodaQuotes() {
  const index = Math.floor(Math.random() * quotes.length);

  return <p>"{quotes[index]}"</p>;
}
