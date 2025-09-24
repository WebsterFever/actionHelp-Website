// import React, { useState } from "react";
// import styles from "./Chatbot.module.css";
// import { useLanguage } from "../context/LanguageContext";

// const Chatbot = () => {
//   const { t } = useLanguage(); // access translations
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: t.chatbot.welcome, sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userText = input.toLowerCase();
//     const responses = t.chatbot.responses;

//     let botText = "";

//     if (
//       userText.includes("hello") ||
//       userText.includes("hi") ||
//       userText.includes("good morning") ||
//       userText.includes("good night") ||
//       userText.includes("bonjour")
//     ) {
//       botText = responses.greetings;
//     } else if (userText.includes("help") || userText.includes("aide")) {
//       botText = responses.help;
//     } else if (userText.includes("immigration") || userText.includes("immigration")) {
//       botText = responses.immigration;
//     } else if (userText.includes("bye") || userText.includes("au revoir")) {
//       botText = responses.bye;
//     } else {
//       botText = responses.default;
//     }

//     setMessages((prev) => [
//       ...prev,
//       { text: input, sender: "user" },
//       { text: botText, sender: "bot" },
//     ]);

//     setInput("");
//   };

//   return (
//     <div className={styles.chatbotContainer}>
//       <button onClick={() => setOpen(!open)} className={styles.toggleButton}>
//         {open ? t.chatbot.toggleClose : t.chatbot.toggleOpen}
//       </button>

//       {open && (
//         <div className={styles.chatWindow}>
//           <div className={styles.messages}>
//             {messages.map((msg, idx) => (
//               <div key={idx} className={styles[msg.sender]}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className={styles.inputArea}>
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder={t.chatbot.placeholder}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <button onClick={handleSend}>{t.chatbot.send}</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
// import React, { useState } from "react";
// import styles from "./Chatbot.module.css";
// import { useLanguage } from "../context/LanguageContext";

// const Chatbot = () => {
//   const { t } = useLanguage(); // access translations
//   const [open, setOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { text: t.chatbot.welcome, sender: "bot" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userText = input.toLowerCase();
//     const responses = t.chatbot.responses;

//     let botText = "";

//     if (
//       userText.includes("hello") ||
//       userText.includes("hi") ||
//       userText.includes("good morning") ||
//       userText.includes("good night") ||
//       userText.includes("bonjour")
//     ) {
//       botText = responses.greetings;
//     } else if (userText.includes("help") || userText.includes("aide")) {
//       botText = responses.help;
//     } else if (userText.includes("immigration")) {
//       botText = responses.immigration;
//     } else if (userText.includes("bye") || userText.includes("au revoir")) {
//       botText = responses.bye;
//     } else {
//       botText = responses.default;
//     }

//     setMessages((prev) => [
//       ...prev,
//       { text: input, sender: "user" },
//       { text: botText, sender: "bot" },
//     ]);

//     setInput("");
//   };

//   return (
//     <div className={styles.chatbotContainer}>
//       {/* Floating toggle button */}
//       <button onClick={() => setOpen(!open)} className={styles.toggleButton}>
//         {open ? t.chatbot.toggleClose : t.chatbot.toggleOpen}
//       </button>

//       {/* Chat window */}
//       {open && (
//         <div className={styles.chatWindow}>
//           {/* Header with close button */}
//           <div className={styles.chatHeader}>
//             <span>{t.chatbot.title || "Chatbot"}</span>
//             <button
//               className={styles.closeButton}
//               onClick={() => setOpen(false)}
//               aria-label="Close chat"
//             >
//               ×
//             </button>
//           </div>

//           {/* Messages */}
//           <div className={styles.messages}>
//             {messages.map((msg, idx) => (
//               <div key={idx} className={styles[msg.sender]}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className={styles.inputArea}>
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder={t.chatbot.placeholder}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <button onClick={handleSend}>{t.chatbot.send}</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import { useLanguage } from "../context/LanguageContext";

const Chatbot = () => {
  const { t } = useLanguage();

  // closed by default; welcome message present → 1 unread
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(1);

  const [messages, setMessages] = useState([
    {
      text: t.chatbot?.welcome || "Hi! I'm ActionHelpBot. How can I help you?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const openChat = () => {
    setOpen(true);
    setUnread(0); // user has seen messages
  };

  const closeChat = () => setOpen(false);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userText = text.toLowerCase();
    const responses = t.chatbot?.responses || {};

    let botText = responses.default || "How can I help you?";
    if (/\b(hello|hi|hey|bonjour|good (morning|night))\b/.test(userText)) {
      botText = responses.greetings || botText;
    } else if (userText.includes("help") || userText.includes("aide")) {
      botText = responses.help || botText;
    } else if (userText.includes("immigration")) {
      botText = responses.immigration || botText;
    } else if (/\b(bye|au revoir)\b/.test(userText)) {
      botText = responses.bye || botText;
    }

    // append user + bot messages
    setMessages((prev) => [...prev, { text }, { text: botText, sender: "bot" }]);

    // if the window is closed when bot replies, bump unread
    if (!open) setUnread((u) => u + 1);

    setInput("");
  };

  return (
    <div className={`${styles.chatbotContainer} ${open ? styles.open : ""}`}>
      {/* Toggle button (hidden when open) with unread badge */}
      {!open && (
        <button
          type="button"
          className={styles.toggleButton}
          onClick={openChat}
          aria-label={
            unread > 0
              ? `${unread} ${t.chatbot?.newMessage || "new messages"}. ${
                  t.chatbot?.toggleOpen || "Open chat"
                }`
              : t.chatbot?.toggleOpen || "Open chat"
          }
          title={t.chatbot?.toggleOpen || "Open chat"}
        >
          💬
          {unread > 0 && (
            <span className={styles.badge} aria-hidden="true">
              {unread}
            </span>
          )}
        </button>
      )}

      {open && (
        <div
          className={styles.chatWindow}
          role="dialog"
          aria-label={t.chatbot?.title || ""}
        >
          {/* Close at the top-right */}
          <button
            type="button"
            className={styles.closeTop}
            onClick={closeChat}
            aria-label={t.chatbot?.toggleClose || "Close chat"}
            title={t.chatbot?.toggleClose || "Close chat"}
          >
            ×
          </button>

          

          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === "bot" ? styles.bot : styles.user}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chatbot?.placeholder || "Type here..."}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button type="button" onClick={handleSend} className={styles.sendButton}>
              {t.chatbot?.send || "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
