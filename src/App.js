import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const emojidict = {
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐕": "Dog",
    "🐈": "Cat",
    "🐅": "Tiger",
    "🐆": "Leopard",
    "🐎": "Horse",
    "🦌": "Deer",
    "🐂": "Ox",
    "🐃": "Water Buffalo",
    "🐄": "Cow",
    "🐖": "Pig",
    "🐐": "Goat",
    "🐪": "Camel",
    "🦙": "Llama",
    "🐘": "Elephant",
    "🦏": "Rhinoceros",
    "🦛": "Hippopotamus",
    "🐁": "Mouse",
    "🐀": "Rat",
    "🐇": "Rabbit",
    "🐿️": "Chipmunk",
    "🦔": "Hedgehog",
    "🦥": "Sloth",
    "🦦": "Otter",
    "🦨": "Skunk",
    "🦘": "Kangaroo",
    "🦡": "Badger",
    "🐧": "Penguin",
    "🐊": "Crocodile",
    "🐢": "Turtle",
    "🦎": "Lizard",
    "🐍": "Snake",
    "🐉": "Dragon",
    "🦕": "Sauropod",
    "🦖": "T-Rex",
    "🐋": " Whale",
    "🐬": "Dolphin",
    "🐡": "Blowfish",
    "🦈": "Shark",
    "🐙": "Octopus",
    "🐌": "Snail",
    "🦋": "Butterfly",
    "🐛": "Bug",
    "🐜": "Ant",
    "🐝": "Honeybee",
    "🐞": "Beetle",
    "🦗": "Cricket",
    "🕷️": "Spider",
    "🦂": "Scorpion",
    "🦟": "Mosquito"
  };

  const [meaning, setMeaning] = useState("");

  const inputHandler = (event) => {
    var inputtxt = event.target.value;
    var meaning = emojidict[inputtxt];
    if (meaning === undefined) {
      meaning = "Emoji doesn't exist in our database yet.";
    }
    setMeaning(meaning);
  };

  const emojiClick = (emoji) => {
    setMeaning(emojidict[emoji]);
  };

  return (
    <div className="App">
      <h1>Animal Emoji Interpreter </h1>

      <input
        style={{
          border: "none",
          borderRadius: "0.7rem",
          width: "90px",
          height: "30px"
        }}
        placeholder="enter an emoji"
        onChange={inputHandler}
      />
      <h3>{meaning}</h3>
      <h3>Our database: </h3>
      <div>
        {Object.keys(emojidict).map((item) => {
          return (
            <span
              style={{ cursor: "Pointer", padding: "2px", fontSize: "2.5rem" }}
              onClick={() => emojiClick(item)}
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
