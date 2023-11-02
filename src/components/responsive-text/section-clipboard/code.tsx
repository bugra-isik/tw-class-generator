const twClass = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
];

const div = (index: number) => {
  const textArray = [
    `text-${
      twClass[index == 6 ? index - 3 : index > 6 ? index - 2 : index - 4]
    }`,
    `sm:text-${twClass[index >= 6 ? index - 1 : index - 2]}`,
    `md:text-${twClass[index]}`,
    `lg:text-${
      twClass[index == 6 ? index - 3 : index > 6 ? index - 2 : index - 4]
    }`,
    `xl:text-${twClass[index >= 6 ? index - 1 : index - 2]}`,
    `2xl:text-${twClass[index]}`,
  ];

  return (
    <code className={`flex text-xs sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}>
      <p className={`text-color8`}>{"<"}</p>
      <p className={`text-color7`}>{"div"}</p>
      <p className={`pl-5 text-color6`}>{"className"}</p>
      <p className={`text-color8`}>{"={`"}</p>
      <div className={`flex gap-x-2`}>
        {textArray.map((e, i) => (
          <p key={i} className={`rounded bg-color4/10 px-2 py-px text-color4`}>
            {e}
          </p>
        ))}
      </div>
      <p className={`text-color8`}>{"`}>"}</p>
      <p className={`text-color5`}> ... </p>
      <p className={`text-color8`}>{"</"}</p>
      <p className={`text-color7`}>{"div"}</p>
      <p className={`text-color8`}>{">"}</p>
      <pre hidden>{textArray.slice()}</pre>
    </code>
  );
};

export { div };
