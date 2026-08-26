import Link from "next/link";
import {
  linkButtonBase,
  linkButtonSizes,
  linkButtonVariants,
  type LinkButtonSize,
  type LinkButtonVariant,
} from "./linkButtonStyles";

interface ServerLinkButtonProps {
  href: string;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
}

/** Crawlable link styled like Button — safe for Server Components (no motion). */
export function ServerLinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  className = "",
}: ServerLinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${linkButtonBase} ${linkButtonSizes[size]} ${linkButtonVariants[variant]} ${className}`}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </Link>
  );
}
