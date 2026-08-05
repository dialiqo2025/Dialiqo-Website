"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const sizeStyles = {
  sm: { height: 32, width: 102 },
  md: { height: 40, width: 128 },
  lg: { height: 52, width: 166 },
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "auto",
  size = "md",
  onClick,
}) => {
  const { height, width } = sizeStyles[size];

  // Wordmark is white — keep a dark plate on light surfaces so it stays readable.
  const plate =
    variant === "dark"
      ? "bg-transparent"
      : variant === "light"
        ? "bg-slate-950 rounded-lg px-2 py-1"
        : "bg-slate-950 rounded-lg px-2 py-1 dark:bg-transparent dark:px-0 dark:py-0";

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none ${plate} ${onClick ? "cursor-pointer group" : ""} ${className}`}
    >
      <Image
        src="/header-logo.png"
        alt="Dialiqo Ultimate Solutions"
        width={500}
        height={500}
        priority
        className="h-auto w-auto max-h-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
        style={{ height, width: "auto" }}
      />
    </div>
  );
};
