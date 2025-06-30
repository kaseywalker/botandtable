import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // ms per character
  className?: string;
  onAnimationEnd?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 30, className, onAnimationEnd }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => (text[i] !== undefined ? prev + text[i] : prev));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onAnimationEnd) onAnimationEnd();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onAnimationEnd]);

  return <span className={className}>{displayed}</span>;
};

export default TypewriterText; 