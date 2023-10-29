import { div } from "./code";
import CopyButton from "../../buttons/copyButton";

export default function Clipboard({
  value,
  index,
}: {
  value: string;
  index: number;
}) {
  const textArray = div(index);

  return (
    <section
      className={`relative flex h-1/5 w-2/3 select-none items-center justify-center rounded-xl
     border border-color2 bg-color3 text-xl`}
    >
      <CopyButton value={textArray.props.children[10].props.children} />
      {value == "" ? (
        <p className={`text-5xl`}>Select size from above.</p>
      ) : (
        <pre>{div(index)}</pre>
      )}
    </section>
  );
}
