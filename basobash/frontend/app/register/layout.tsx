export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex text-center justify-center">{children}</div>
    </section>
  );
}
