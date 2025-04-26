"use client";

import Link from "next/link";

interface ButtonProps
  extends React.InputHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href?: string;
  asChild?: boolean;
}

export function Button({
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-200 cursor-pointer";

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseClasses} ${className}`}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
