"use client"

import { motion } from 'framer-motion';
import { ReactNode, createContext, useContext } from 'react';
import { useTransitionStore } from './TransitionSelector';

interface PageTransitionProps {
    children: ReactNode;
    forceVariant?: 'fade' | 'slide' | 'slideUp' | 'scale';
}

export const transitionVariants = {
    fade: {
        hidden: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } }
    },
    slide: {
        hidden: { x: 300, opacity: 0 },
        enter: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { x: -300, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
    },
    slideUp: {
        hidden: { y: 100, opacity: 0 },
        enter: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { y: -100, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } }
    },
    scale: {
        hidden: { scale: 0.9, opacity: 0 },
        enter: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
        exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } }
    }
};

export function PageTransition({ children, forceVariant }: PageTransitionProps) {
    // Use the global transition store
    const { transitionType } = useTransitionStore();

    // Use forced variant if provided, otherwise use the global state
    const variant = forceVariant || transitionType;

    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={transitionVariants[variant]}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}