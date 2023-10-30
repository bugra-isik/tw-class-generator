import { useState } from "react";
import json from "./fontsize.json";
import Indicator from "./section-indicator/indicator";
import Clipboard from "./section-clipboard/clipboard";
import { motion } from "framer-motion";

export default function ResponsiveText() {
  const [current, setCurrent] = useState<string>("base");
  const [twClass, setTwClass] = useState<string>("");
  const [index, setIndex] = useState<number>(12);
  const textClasses = json
    .slice()
    .reverse()
    .map((e, i) => (
      <button
        key={e}
        className={`w-full text-xl font-bold transition-colors hover:bg-color1 hover:text-color4`}
        onClick={() => {
          setCurrent(e);
          setTwClass("text-" + e);
          i > 3 && setIndex(i);
        }}
      >
        {e}
      </button>
    ));

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex h-screen flex-col items-center justify-center gap-5`}
    >
      <section
        className={`flex h-10 w-2/3 divide-x-2 divide-color1 rounded-xl bg-color3 text-color6 `}
      >
        {textClasses}
      </section>
      <Indicator value={twClass} />
      <Clipboard value={current} index={index} />
    </motion.main>
  );
}
