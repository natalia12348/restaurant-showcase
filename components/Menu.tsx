"use client";

import { useState } from "react";
import { formatPrice, menu } from "@/lib/data";

export default function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((category) => category.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="bg-surface py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Menu</p>
          <h2 className="font-serif text-4xl sm:text-5xl">Karta sezonowa</h2>
        </div>

        <div role="tablist" aria-label="Kategorie menu" className="mt-12 flex justify-center gap-2 sm:gap-6">
          {menu.map((category) => {
            const selected = category.id === activeId;
            return (
              <button
                key={category.id}
                id={`tab-${category.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`panel-${category.id}`}
                onClick={() => setActiveId(category.id)}
                className={`border-b px-3 py-2 text-xs uppercase tracking-[0.25em] transition-colors sm:text-sm ${
                  selected ? "border-gold text-gold" : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <ul
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${active.id}`}
          className="mt-12 divide-y divide-border"
        >
          {active.items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-6 py-6">
              <div>
                <h3 className="font-serif text-2xl">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
              <span className="whitespace-nowrap font-serif text-xl text-gold">{formatPrice(item.price)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
