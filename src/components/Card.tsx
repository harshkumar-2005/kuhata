import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`
    relative overflow-hidden
    bg-white/40 dark:bg-white/5 
    backdrop-blur-xl 
    border border-slate-200/50 dark:border-white/10 
    rounded-3xl p-6 
    hover:border-blue-500/50 dark:hover:border-blue-500/30 
    transition-all duration-500 
    hover:shadow-2xl hover:shadow-blue-500/10
    hover:-translate-y-2
    ${className}`}
  >
    {children}
  </div>
);

export default Card;