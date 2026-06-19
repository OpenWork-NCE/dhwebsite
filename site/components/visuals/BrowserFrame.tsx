export default function BrowserFrame({
  url = "digitalhouse.app",
  children,
  className = "",
}: {
  url?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <div className="ml-3 flex-1">
          <div className="mx-auto w-fit rounded-md bg-white px-3 py-1 text-[11px] font-medium text-muted ring-1 ring-line">
            {url}
          </div>
        </div>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
