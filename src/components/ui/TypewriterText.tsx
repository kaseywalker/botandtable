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
    let cancelled = false;
    function typeNext() {
      setDisplayed((prev) => (text[i] !== undefined ? prev + text[i] : prev));
      i++;
      if (i < text.length && !cancelled) {
        const jitter = Math.floor(Math.random() * 16) - 8; // -8ms to +7ms
        setTimeout(typeNext, speed + jitter);
      } else if (i >= text.length && onAnimationEnd && !cancelled) {
        onAnimationEnd();
      }
    }
    typeNext();
    return () => { cancelled = true; };
  }, [text, speed, onAnimationEnd]);

  return <span className={className}>{displayed}</span>;
};

export default TypewriterText; 