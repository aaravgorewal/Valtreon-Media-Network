import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (href: string) => void;
}

export default function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#0A0A0C] border-b border-[#222226] py-2.5 px-6 font-mono text-[11px] text-zinc-400"
    >
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2">
        <ol
          className="flex items-center flex-wrap gap-2"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1 || item.isCurrent;

            return (
              <li
                key={index}
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => onNavigate?.(item.href)}
                    className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C8465]"
                    itemProp="item"
                  >
                    <Home className="w-3.5 h-3.5 text-[#9C8465]" />
                    <span itemProp="name">{item.label}</span>
                  </button>
                ) : isLast ? (
                  <span
                    className="text-[#9C8465] font-semibold uppercase tracking-wide"
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => onNavigate?.(item.href)}
                    className="text-zinc-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9C8465]"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </button>
                )}

                <meta itemProp="position" content={String(index + 1)} />

                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-zinc-600 shrink-0" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
