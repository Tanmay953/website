import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function MotionInView({ className, delay = 0, ...props }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    />
  );
}
