export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center justify-start gap-4 py-8 md:py-10 md:pt-20">
      <div className="w-full flex text-center justify-center">{children}</div>
    </section>
  );
}
