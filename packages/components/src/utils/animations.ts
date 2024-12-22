import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideInRight: Variants = {
  initial: { x: 20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 20, opacity: 0 },
};

export const slideInLeft: Variants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

export const slideInUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 20, opacity: 0 },
};

export const slideInDown: Variants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

export const scale: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
};

export const flip: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
  exit: { rotateX: 90, opacity: 0 },
};

export const drawer: Variants = {
  initial: (side: 'left' | 'right' | 'top' | 'bottom' = 'right') => {
    const transforms: Record<string, { [key: string]: number }> = {
      left: { x: -100 },
      right: { x: 100 },
      top: { y: -100 },
      bottom: { y: 100 },
    };
    return {
      ...transforms[side],
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (side: 'left' | 'right' | 'top' | 'bottom' = 'right') => {
    const transforms: Record<string, { [key: string]: number }> = {
      left: { x: -100 },
      right: { x: 100 },
      top: { y: -100 },
      bottom: { y: 100 },
    };
    return {
      ...transforms[side],
      opacity: 0,
    };
  },
};

export const transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};
