import { restaurant } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 text-center text-xs uppercase tracking-[0.25em] text-muted">
      © {restaurant.name}. Wszelkie prawa zastrzeżone.
    </footer>
  );
}
