"use client";

import { MouseEvent, ReactNode, useRef } from "react";

/**
 * RippleButton creates a subtle ripple effect on click. It supports both
 * anchor and button elements depending on the presence of an href prop.
 * When clicked, a span is created at the click position and animated
 * via CSS. After the animation finishes, the span is removed. Pass any
 * additional className or props through to customise the styling.
 */
interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export default function RippleButton({ children, className = "", href, onClick, type = "button", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const button = ref.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const span = document.createElement('span');
    span.className = 'ripple-span';
    const size = Math.max(rect.width, rect.height);
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${x - size / 2}px`;
    span.style.top = `${y - size / 2}px`;
    button.appendChild(span);
    span.addEventListener('animationend', () => {
      span.remove();
    });
    if (onClick) onClick(e);
  };

  if (href) {
    return (
      <a
        ref={ref as any}
        href={href}
        onClick={handleClick as any}
        className={`ripple ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      ref={ref as any}
      onClick={handleClick as any}
      type={type}
      className={`ripple ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}