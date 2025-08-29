import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import { useLanguage } from "../context/LanguageContext";

const Chatbot = () => {
  const { t } = useLanguage(); // access translations
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: t.chatbot.welcome, sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.toLowerCase();
    const responses = t.chatbot.responses;

    let botText = "";

    if (
      userText.includes("hello") ||
      userText.includes("hi") ||
      userText.includes("good morning") ||
      userText.includes("good night") ||
      userText.includes("bonjour")
    ) {
      botText = responses.greetings;
    } else if (userText.includes("help") || userText.includes("aide")) {
      botText = responses.help;
    } else if (userText.includes("immigration") || userText.includes("immigration")) {
      botText = responses.immigration;
    } else if (userText.includes("bye") || userText.includes("au revoir")) {
      botText = responses.bye;
    } else {
      botText = responses.default;
    }

    setMessages((prev) => [
      ...prev,
      { text: input, sender: "user" },
      { text: botText, sender: "bot" },
    ]);

    setInput("");
  };

  return (
    <div className={styles.chatbotContainer}>
      <button onClick={() => setOpen(!open)} className={styles.toggleButton}>
        {open ? t.chatbot.toggleClose : t.chatbot.toggleOpen}
      </button>

      {open && (
        <div className={styles.chatWindow}>
          <div className={styles.messages}>
            {messages.map((msg, idx) => (
              <div key={idx} className={styles[msg.sender]}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chatbot.placeholder}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>{t.chatbot.send}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
