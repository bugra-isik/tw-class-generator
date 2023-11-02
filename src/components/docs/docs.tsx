export default function Docs({
  setSelfDestruction,
  setRoute,
}: {
  setSelfDestruction: (e: boolean) => void;
  setRoute: (e: string) => void;
}) {
  const buttonData = ["Responsive Width", "Responsive Text"];

  const buttons = buttonData.map((text, index) => (
    <button
      key={index}
      className={`h-20 rounded border-2 border-color2 bg-black/0 text-sm font-semibold text-color5 drop-shadow-2xl transition-colors hover:bg-black/25 sm:text-lg md:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl`}
      onClick={(e) => {
        setSelfDestruction(false);
        setRoute(e.currentTarget.innerText);
      }}
    >
      {text}
    </button>
  ));

  return (
    <main
      id="doc"
      className={`relative h-screen text-white lg:px-40 lg:pt-10 xl:px-60 xl:pt-20 2xl:px-80 2xl:pt-40`}
    >
      <section>
        <h1
          className={` mb-5 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
        >
          Get started with Responsive Class Generator
        </h1>
        <p
          className={`mb-10 text-xs text-color5/50 sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
        >
          This tool enables Tailwind CSS users to create responsive designs more
          easily and quickly, allowing them to harness the power of Tailwind CSS
          with greater ease.
        </p>
      </section>
      <section>
        <h1
          className={`mb-5 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
        >
          Main Features
        </h1>
        <ol
          className={`mb-10 text-xs text-color5/50 sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
        >
          <li>
            <strong>Easy to Use:</strong> The tool offers a user-friendly
            interface, allowing developers of all levels to create responsive
            classes effortlessly.
          </li>
          <li>
            <strong>Customization:</strong> Users can define how it behaves
            based on screen width or other media queries.
          </li>
          <li>
            <strong>Rapid Code Generation:</strong> The application aids users
            in swiftly generating responsive class codes.
          </li>
          <li>
            <strong>Source Code Preview:</strong> An option to view the source
            code of the created classes.
          </li>
        </ol>
      </section>
      <section className={`mb-20`}>
        <h1
          className={`mb-5 text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-3xl xl:text-4xl 2xl:text-5xl`}
        >
          What's next?
        </h1>
        <p
          className={`text-xs text-color5/50 sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
        >
          Choose from the tool below and you're all set!
        </p>
      </section>
      <section
        className={`absolute bottom-0 mb-10 grid w-2/3 grid-cols-2 gap-5 `}
      >
        {buttons}
      </section>
    </main>
  );
}
