"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-gold";
const labelClass = "mb-2 block text-xs uppercase tracking-[0.25em] text-muted";

export default function Reservation() {
  const [submittedName, setSubmittedName] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubmittedName(String(data.get("name") ?? ""));
    event.currentTarget.reset();
  };

  return (
    <section id="reservation" className="mx-auto max-w-3xl px-6 py-28">
      <div className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Rezerwacja</p>
        <h2 className="font-serif text-4xl sm:text-5xl">Zarezerwuj stolik</h2>
      </div>

      {submittedName !== null ? (
        <div role="status" className="mt-12 border border-gold p-8 text-center">
          <p className="font-serif text-2xl text-gold">Dziękujemy{submittedName ? `, ${submittedName}` : ""}!</p>
          <p className="mt-2 text-muted">Potwierdzimy rezerwację telefonicznie lub e-mailem.</p>
          <button
            type="button"
            onClick={() => setSubmittedName(null)}
            className="mt-6 text-xs uppercase tracking-[0.25em] text-gold underline underline-offset-4"
          >
            Nowa rezerwacja
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className={labelClass}>Imię i nazwisko</label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>E-mail</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Telefon</label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
          </div>
          <div>
            <label htmlFor="date" className={labelClass}>Data</label>
            <input id="date" name="date" type="date" required className={fieldClass} />
          </div>
          <div>
            <label htmlFor="time" className={labelClass}>Godzina</label>
            <input id="time" name="time" type="time" required min="13:00" max="22:00" className={fieldClass} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="guests" className={labelClass}>Liczba gości</label>
            <select id="guests" name="guests" defaultValue="2" className={fieldClass}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="border border-gold bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-background transition-colors hover:bg-transparent hover:text-gold sm:col-span-2"
          >
            Wyślij rezerwację
          </button>
        </form>
      )}
    </section>
  );
}
