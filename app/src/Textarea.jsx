import React, { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  return (
    <textarea
      className="textarea"
      value={text}
      onChange={(e) => {
        // control textarea
        const newText = e.target.value;
        setText(newText);
      }}
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}
