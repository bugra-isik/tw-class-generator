import { motion } from "framer-motion";

export default function Landing() {
  return (
    <main
      className={`inset-0 flex h-screen flex-col items-center justify-center gap-20 bg-color1 bg-[linear-gradient(to_right,#121b2e_1px,transparent_1px),linear-gradient(to_bottom,#121b2e_1px,transparent_1px)] bg-[size:24px_24px] px-60 text-center text-white`}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        className={`z-10 text-4xl font-extrabold drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl`}
      >
        Rapidly generate responsive classes without ever leaving your HTML.
      </motion.h1>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 2 } }}
        className={`z-10 rounded-lg bg-color7  px-10 py-5 text-xl font-semibold text-color3 transition-colors hover:bg-color7/75 `}
        href="#doc"
      >
        Get started
      </motion.a>

      <img
        className={`absolute inset-0 max-h-full max-w-full`}
        src="./gradient.svg"
        alt=""
      />
    </main>
  );
}
