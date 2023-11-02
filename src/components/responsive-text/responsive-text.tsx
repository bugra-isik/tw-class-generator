import { useState } from "react";
import json from "./fontsize.json";
import Indicator from "./section-indicator/indicator";

import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Clipboard from "./section-clipboard/clipboard";

export default function ResponsiveText({
  setRoute,
}: {
  setRoute: (e: string) => void;
}) {
  const [current, setCurrent] = useState<string>("base");
  const [twClass, setTwClass] = useState<string>("");
  const [index, setIndex] = useState<number>(12);
  const textClasses = json
    .slice()
    .reverse()
    .map((e, i) => (
      <button
        key={e}
        className={`w-full text-xs font-bold transition-colors hover:bg-color1 hover:text-color4 sm:text-base md:text-xl lg:text-xs xl:text-base 2xl:text-xl`}
        onClick={() => {
          setCurrent(e);
          setTwClass("text-" + e);
          i > 3 && setIndex(i);
        }}
      >
        {e}
      </button>
    ));

  const buttonData = ["Docs", "Responsive Width"];

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
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative flex h-screen flex-col items-center justify-center gap-5`}
    >
      <section
        className={`flex lg:h-8 xl:h-9 2xl:h-10 w-2/3 divide-x-2 divide-color1 rounded-xl bg-color3 text-color6 `}
      >
        {textClasses}
      </section>
      <Indicator value={twClass} />
      <Clipboard value={current} index={index} />
      <section
        className={`absolute bottom-0 mb-10 grid w-2/3 grid-cols-2 gap-5 `}
      >
        {buttons}
      </section>
    </motion.main>
  );
}
