import { useState } from "react";
import { AiFillCopy } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { useCopyToClipboard } from "@uidotdev/usehooks";

export default function CopyButton({ value }: { value: string[] | undefined }) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <button
      className={`absolute right-2 top-2 flex w-24 cursor-copy items-center justify-center gap-2 rounded border border-color8 px-1 py-1 text-base text-color8 transition hover:bg-color8/25 hover:text-color3`}
      onClick={() => {
        value && copyToClipboard(value.join(" "));
        setToggle(false);
        setTimeout(() => {
          setToggle(true);
        }, 2000);
      }}
    >
      {toggle ? (
        <>
          <AiFillCopy />
          <div>Copy</div>
        </>
      ) : (
        <>
          <span className={`text-xl`}>
            <BsCheckLg />
          </span>
          <div>Copied</div>
        </>
      )}
    </button>
  );
}
