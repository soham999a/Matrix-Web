export default function Loading() {
  return (
    <div className="min-h-screen bg-background text-foreground animate-pulse">
      <div className="h-20 border-b border-border" />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 pt-32 pb-20">
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          <div className="col-span-12 md:col-span-3">
            <div className="h-3 w-24 bg-foreground/10 rounded" />
          </div>
          <div className="col-span-12 md:col-span-9 space-y-6">
            <div className="h-16 w-3/4 bg-foreground/5 rounded" />
            <div className="h-16 w-1/2 bg-foreground/5 rounded" />
            <div className="h-4 w-full bg-foreground/5 rounded mt-10" />
            <div className="h-4 w-2/3 bg-foreground/5 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
