export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start gap-4 py-8 md:py-10 md:pt-20">
      <div className="inline-block min-w-screen text-center justify-center">
        {children}
      </div>
    </section>
  );
}
