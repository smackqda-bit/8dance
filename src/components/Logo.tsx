export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex size-[52px] shrink-0 flex-col items-center justify-center rounded-full border border-paper pl-[3px] font-display text-[9px] font-light leading-[1.25] tracking-[0.32em] ${className}`}
    >
      <span>DANC</span>
      <span>ESTU</span>
      <span>
        DIO<span className="tracking-[0.1em] text-[#5a5a5a]">|</span>
        <span className="text-accent">8</span>
      </span>
    </span>
  );
}
