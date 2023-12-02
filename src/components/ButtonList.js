import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Big Boss",
  "Dhee",
  "Live",
  "Music",
  "RobertKiyosaki",
  "Tamil Cinema",
  "HTML",
  "Computer Programming",
  "News",
  "Mixes",
  "Filmi",
  "Cricket",
];

const ButtonList = () => {
  return (
    <div className="flex flex-wrap">
      {list.map((buttonText) => (
        <Button name={buttonText} key={Math.random()} />
      ))}
    </div>
  );
};

export default ButtonList;
