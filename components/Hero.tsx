import { restaurant } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2a2116_0%,#0c0b0a_70%)]"
      />
      <div className="relative max-w-3xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">Fine dining · Warszawa</p>
        <h1 className="font-serif text-6xl font-medium leading-none tracking-[0.15em] sm:text-8xl">
          {restaurant.name.toUpperCase()}
        </h1>
        <p className="mx-auto mt-8 max-w-xl font-serif text-xl italic text-muted sm:text-2xl">
          {restaurant.tagline}
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#reservation"
            className="border border-gold bg-gold px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-background transition-colors hover:bg-transparent hover:text-gold"
          >
            Zarezerwuj stolik
          </a>
          <a
            href="#menu"
            className="border border-border px-8 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-gold hover:text-gold"
          >
            Zobacz menu
          </a>
        </div>
      </div>
    </section>
  );
}
