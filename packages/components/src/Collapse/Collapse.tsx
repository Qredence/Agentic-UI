import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '@agentic-ui/core';

export interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: number;
  animationType?: 'height' | 'fade' | 'slide' | 'scale';
  className?: string;
  style?: React.CSSProperties;
}

export const Collapse: React.FC<CollapseProps> = ({
  isOpen,
  children,
  duration = 0.2,
  animationType = 'height',
  className,
  style,
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        };
      case 'slide':
        return {
          initial: { height: 0, opacity: 0, y: -10 },
          animate: { height: 'auto', opacity: 1, y: 0 },
          exit: { height: 0, opacity: 0, y: -10 },
        };
      case 'scale':
        return {
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.95, opacity: 0 },
        };
      case 'height':
      default:
        return {
          initial: { height: 0, opacity: 0 },
          animate: { height: 'auto', opacity: 1 },
          exit: { height: 0, opacity: 0 },
        };
    }
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className={className}
          style={{
            overflow: 'hidden',
            ...style,
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={getAnimation()}
          transition={{
            duration,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
