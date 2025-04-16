import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
]);
export default function BirthdayTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const phrase = phrases.get(currentLanguage);
  const handleChangeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrase}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>

      <button onClick={() => handleChangeLanguage("german")}>German</button>

      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
    </div>
  );
}
