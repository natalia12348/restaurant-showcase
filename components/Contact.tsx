import { hours, restaurant } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-28">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">Kontakt</p>
          <h2 className="font-serif text-4xl sm:text-5xl">Odwiedź nas</h2>
          <address className="mt-8 space-y-2 not-italic text-muted">
            <p>{restaurant.address}</p>
            <p>
              <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {restaurant.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${restaurant.email}`} className="hover:text-gold">
                {restaurant.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">Godziny otwarcia</h3>
          <ul className="divide-y divide-border">
            {hours.map((row) => (
              <li key={row.days} className="flex justify-between py-4">
                <span>{row.days}</span>
                <span className="text-muted">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
