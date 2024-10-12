import { motion } from "framer-motion";

interface MobileMenuProps {
  show: boolean;
  renderNavComponent: JSX.Element[];
}

export default function MobileMenu({ show, renderNavComponent}: MobileMenuProps) {
  const mobileMenuVariants = {
    visible: {opacity: 1, y: 0, display: 'block'},
    hidden: {opacity: 0, y: -1000, display: 'hidden'}
  }

  return (
    <motion.div
      initial={mobileMenuVariants.hidden}
      variants={mobileMenuVariants}
      animate={show ? "visible" : "hidden"}
      className="bg-gradient-to-b from-white from-90% absolute"
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
    >
      <div className="flex flex-col gap-6 w-screen h-screen">
        {renderNavComponent}
      </div>
    </motion.div>
  );
}
