import React, { useState, useEffect, useRef } from "react";
import "./FlowingText.css";
import { useMedia } from "react-use";

type LetterType = {
  letter: string;
};

function FlowingText() {
  const [text, setText] = useState<LetterType[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const paragraph = useRef<HTMLHeadingElement>(null);
  const isMobile = useMedia("(max-width: 35em)");
  const content =
    "Indrex isn't just about prolonging life - it's about enriching the human experience beyond natural limits. Our mission is to fuse the timeless essence of humanity with the endless possibilities of technology. We believe in a future where death is not an end but a new beginning, a leap into a new frontier of existence.";

  useEffect(() => {
    const letters: LetterType[] = content
      .split("")
      .map((letter) => ({ letter }));
    setText(letters);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (paragraph.current) {
        setScrollPosition(
          (paragraph.current.getBoundingClientRect().y -
            window.innerHeight / (isMobile ? 1.5 : 1.7)) *
            -1
        );
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className="flowing-text-container">
      <h2>Live. Forever.</h2>
      <div className="flowing-text">
        <h1 ref={paragraph}>
          {text.map((item, i) => (
            <span key={i} className={scrollPosition > i ? "filled" : ""}>
              {item.letter}
            </span>
          ))}
        </h1>
        <h1 id="quote-name">- Mike</h1>
      </div>
    </div>
  );
}

export default FlowingText;
