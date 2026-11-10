/** Placeholder until real photos are added to /public. */
export function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-end border border-[#222] bg-panel p-5 text-[11px] uppercase tracking-[0.2em] text-mute ${className}`}
    >
      {label}
    </div>
  );
}
