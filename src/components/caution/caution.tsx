import { motion } from "framer-motion";

export default function Caution() {
  return (
    <main
      className={`inset-0 flex h-screen flex-col items-center gap-20 bg-color1 bg-[linear-gradient(to_right,#121b2e_1px,transparent_1px),linear-gradient(to_bottom,#121b2e_1px,transparent_1px)] bg-[size:24px_24px] text-center text-white`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        className={`container z-10 mt-40 px-10`}
      >
        <p className={`text-3xl font-black `}>🚫 Caution! 🚫</p>
        <p className={`mt-5 font-semibold`}>
          This project only works on large screens.
        </p>

        <p className={`mt-5 text-center text-2xl text-white/50`}>
          This web application is designed for large screens breakpoints (lg,
          xl, 2xl) only. Please try accessing it using a larger device.
        </p>
        <p className={`mt-5 font-semibold`}>
          {" "}
          It does not work on small screens.
        </p>
      </motion.h1>

      <img
        className={`absolute inset-0 max-h-full max-w-full`}
        src="./gradient.svg"
        alt=""
      />
    </main>
  );
}
