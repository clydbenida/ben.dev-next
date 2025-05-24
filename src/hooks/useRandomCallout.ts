import { useEffect, useState } from "react";

export default function useRandomCallout() {
  const randomStrings = [
    "Talk is cheap. Show me the code. – Linus Torvalds",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "This 3D model is modeled after my desk.",
    "This callout will be used as a notification in the future. 😉",
    "It’s not a bug; it’s an undocumented feature. – Anonymous Developer Wisdom"
  ]

  const [randomCallout, setRandomCallout] = useState("");

  useEffect(() => {
    const rNum = Math.floor(Math.random() * 5);

    setRandomCallout(randomStrings[rNum])
  }, [])

  return randomCallout;
}
