import { useAnimate } from "framer-motion";

export function useAnimateHighlight() {
  const [scope, animate] = useAnimate()

  function triggerAnimation() {
    animate("section", { scale: [1, 1.03, 1] }, { duration: 0.15 });
  }

  return {scope, triggerAnimation}
}
