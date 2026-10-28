const highlights = [
  { value: "12", label: "stolików w kameralnej sali" },
  { value: "100%", label: "lokalnych, sezonowych produktów" },
  { value: "180+", label: "etykiet w karcie win" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">O nas</p>
          <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
            Tradycja podana w nowoczesnej formie
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            W Aurum łączymy polskie smaki z precyzją współczesnej kuchni. Menu zmienia się wraz z porami
            roku, a każdy talerz powstaje z produktów od zaufanych, lokalnych dostawców.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Kameralne wnętrze, uważna obsługa i starannie dobrana karta win sprawiają, że każda wizyta
            staje się wyjątkowym wieczorem.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3 md:grid-cols-1">
          {highlights.map((item) => (
            <div key={item.label} className="bg-surface p-8">
              <dt className="font-serif text-5xl text-gold">{item.value}</dt>
              <dd className="mt-2 text-sm uppercase tracking-widest text-muted">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
