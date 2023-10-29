export default function Indicator({ value }: { value: string }) {
  const dynamicClassConverter: { [key: string]: string } = {
    "text-9xl": "text-9xl",
    "text-8xl": "text-8xl",
    "text-7xl": "text-7xl",
    "text-6xl": "text-6xl",
    "text-5xl": "text-5xl",
    "text-4xl": "text-4xl",
    "text-3xl": "text-3xl",
    "text-2xl": "text-2xl",
    "text-xl": "text-xl",
    "text-lg": "text-lg",
    "text-base": "text-base",
    "text-sm": "text-sm",
    "text-xs": "text-xs",
  };

  return (
    <section
      className={`flex h-1/5 w-2/3 items-center justify-center overflow-hidden whitespace-nowrap
      rounded-xl border border-color3 bg-color2`}
    >
      {value ? (
        <p className={`${dynamicClassConverter[value]} px-5 font-medium`}>
          The quick brown fox jumps over the lazy dog.
        </p>
      ) : (
        <p className={`text-5xl`}>Select size from above.</p>
      )}
    </section>
  );
}
