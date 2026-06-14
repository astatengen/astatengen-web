type AbstractPanelProps = {
  label?: string;
  tone?: "light" | "dark" | "orange";
};

export function AbstractPanel({ label = "Warm Digital Craft", tone = "light" }: AbstractPanelProps) {
  return (
    <div className={`abstract-panel abstract-panel-${tone}`} aria-hidden="true">
      <div className="abstract-grid" />
      <div className="abstract-line abstract-line-one" />
      <div className="abstract-line abstract-line-two" />
      <div className="abstract-block" />
      <span>{label}</span>
    </div>
  );
}
