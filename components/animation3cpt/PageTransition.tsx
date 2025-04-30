
"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    variant?: 'fade' | 'slide' | 'slideUp' | 'scale';
}

export function PageTransition({
    children,
    variant = 'fade'
}: PageTransitionProps) {

    // Animation variants
    const variants = {
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

    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants[variant]}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}