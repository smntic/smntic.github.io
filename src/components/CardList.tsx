export default function CardList({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose flex flex-col space-y-2 bg-panel-dark p-2 rounded">{children}</div>
  );
}
