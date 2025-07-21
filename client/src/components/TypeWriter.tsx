import { useState, useEffect, useRef } from "react";

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterWord?: number;
  className?: string;
  cursor?: boolean;
}

export default function TypeWriter({
  words,
  typingSpeed = 120,
  deletingSpeed = 80,
  delayAfterWord = 1500,
  className = "",
  cursor = true
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDelaying, setIsDelaying] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isDelaying) {
      timeoutRef.current = setTimeout(() => {
        setIsDelaying(false);
        setIsDeleting(true);
      }, delayAfterWord);
      return;
    }

    if (isDeleting) {
      timeoutRef.current = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText.length + 1 === currentWord.length) {
          setIsDelaying(true);
        }
      }, typingSpeed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, currentWordIndex, isDeleting, isDelaying, words, typingSpeed, deletingSpeed, delayAfterWord]);

  return (
    <span className={`${className}`}>
      {currentText}
      {cursor && <span className="animate-blink">|</span>}
    </span>
  );
}
