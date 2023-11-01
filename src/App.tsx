import { useState } from "react";
import Landing from "./components/landing/landing";
import ResponsiveText from "./components/responsive-text/responsive-text";
import Docs from "./components/docs/docs";

import { useWindowSize } from "@uidotdev/usehooks";
import Caution from "./components/caution/caution";
import ResponsiveWidth from "./components/responsive-width/responsive-width";

export default function App() {
  const [selfDestruction, setSelfDestruction] = useState<boolean>(true);
  const [route, setRoute] = useState<string | undefined>(undefined);
  const { width } = useWindowSize();

  return width && width > 1000 ? (
    <div className={`flex flex-col bg-color1 font-sans text-color5 `}>
      {selfDestruction && (
        <>
          <Landing />
          <Docs setSelfDestruction={setSelfDestruction} setRoute={setRoute} />
        </>
      )}
      {route === "Docs" && (
        <Docs setSelfDestruction={setSelfDestruction} setRoute={setRoute} />
      )}
      {route === "Responsive Text" && <ResponsiveText setRoute={setRoute} />}
      {route === "Responsive Width" && <ResponsiveWidth setRoute={setRoute} />}
    </div>
  ) : (
    <Caution />
  );
}
