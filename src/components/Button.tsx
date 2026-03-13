import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  [key: string]: any;
}

const Button = ({ children, href, variant = "primary", className = "", ...props }: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50",
    secondary: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black"
  };

  const Component = href ? "a" : "button";
  const propsToPass = href ? { href, target: href.startsWith("http") ? "_blank" : undefined } : props;

  return (
    <Component className={`${baseStyle} ${variants[variant]} ${className}`} {...propsToPass}>
      {children}
    </Component>
  );
};

export default Button;