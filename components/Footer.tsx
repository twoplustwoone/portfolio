export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-col items-center gap-1 border-t border-[--border] px-6 py-6 text-center md:flex-row md:justify-between md:px-16 md:py-7 md:text-left">
      <p className="text-xs text-[--text-muted]">
        © {new Date().getFullYear()} Francisco Di Giandomenico
      </p>
      <p className="text-xs italic text-[--text-muted]">
        Handmade in New York. Emotionally in Buenos Aires.
      </p>
    </footer>
  );
}
