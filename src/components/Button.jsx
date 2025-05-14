'use client';

import Link from 'next/link';

export default function Button({
  href,
  children,
  onClick,
  type = 'button',
  className = '',
  ariaLabel = 'action button',
  target,
  rel,
  isLink = false, 
}) {
  const baseStyle =
    'inline-flex items-center justify-center bg-[#D63E13] text-white text-[16px] font-medium leading-6 px-4 py-2 rounded shadow transition hover:shadow-lg';

  // Render as <Link>
  if (href || isLink) {
    const isExternal = href?.startsWith('http');
    return (
      <Link
        href={href}
        aria-label={ariaLabel}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : undefined}
        className={`${baseStyle} ${className}`}
      >
        {children}
      </Link>
    );
  }

  // Render as <button>
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${baseStyle} ${className}`}
    >
      {children}
    </button>
  );
}
