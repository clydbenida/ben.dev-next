import { useDeviceType } from '@/hooks/useDeviceType';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react';

interface AnimatedHeaderProps extends React.PropsWithChildren {}

export default function AnimatedHeader({ children }: AnimatedHeaderProps) {
  const isDevicePC = useDeviceType() === "pc";
  const { scrollY } = useScroll({});

  const [showHeader, setShowHeader] = useState(!isDevicePC);
  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  useEffect(() => {
    if (!isDevicePC) {
      setShowHeader(true);
    }
  }, [isDevicePC]);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (isDevicePC) {
      if (latest > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    }
  });

  return (
    <motion.header
      initial={{ opacity: 0, x: -100, display: "hidden" }}
      variants={headerVariants}
      animate={showHeader ? "visible" : "hidden"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
      whileHover={headerVariants.visible}
      className="fixed z-10 w-[100%] bg-white border-b mb-3"
    >
      {children}
    </motion.header>
  );
}
