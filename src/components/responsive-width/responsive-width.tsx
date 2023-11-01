import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

//
// eslint-disable-next-line react-refresh/only-export-components
export const wArr = [
  "w-5",
  "w-6",
  "w-7",
  "w-8",
  "w-9",
  "w-10",
  "w-11",
  "w-12",
  "w-14",
  "w-16",
  "w-20",
  "w-24",
  "w-28",
  "w-32",
  "w-36",
  "w-40",
  "w-44",
  "w-48",
  "w-52",
  "w-56",
  "w-60",
  "w-64",
  "w-72",
  "w-80",
  "w-96",
];

export default function ResponsiveWidth({
  setRoute,
}: {
  setRoute: (e: string) => void;
}) {
  const [current, setCurrent] = useState<string>("w-28");

  const gridItems = wArr.map((e, i) => (
    <button
      key={i}
      className={`h-2/3 w-2/3 bg-color1 transition hover:scale-110`}
      onClick={(e) => {
        setCurrent(e.currentTarget.innerHTML);
      }}
    >
      {e}
    </button>
  ));

  const buttonData = ["Responsive Text", "Docs"];

  const buttons = buttonData.map((text, index) => (
    <button
      key={index}
      className={`h-20 rounded border-2 border-color2 bg-black/0 text-sm font-semibold text-color5 drop-shadow-2xl transition-colors hover:bg-black/25 sm:text-lg md:text-2xl lg:text-sm xl:text-lg 2xl:text-2xl`}
      onClick={() => setRoute(buttonData[index])}
    >
      <div className={`flex items-center justify-evenly`}>
        {index == 0 && <BsChevronLeft />}
        <p>{text}</p>
        {index == 1 && <BsChevronRight />}
      </div>
    </button>
  ));

  return (
    <main className={`flex h-screen flex-col items-center justify-center`}>
      <section className={`flex w-2/3 justify-between`}>
        <div
          className={`grid h-[30rem] w-[30rem] select-none grid-cols-5 place-items-center bg-color2`}
        >
          {gridItems}
        </div>
        <div
          className={`flex h-[30rem] w-[30rem] items-center justify-center bg-color2`}
        >
          <div className={`${wArr && current} h-96 bg-color7`} />
        </div>
      </section>
      <section className={`grid w-2/3 grid-cols-2 gap-5 `}>{buttons}</section>
    </main>
  );
}
