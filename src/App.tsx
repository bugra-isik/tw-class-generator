import { useState } from "react";
import Landing from "./components/landing/landing";
import ResponsiveText from "./components/responsive-text/responsive-text";
import Docs from "./components/docs/docs";
import ResponsiveDimensions from "./components/responsive-dimensions/responsive-dimensions";

export default function App() {
  const [selfDestruction, setSelfDestruction] = useState<boolean>(true);
  const [route, setRoute] = useState<string | undefined>(undefined);

  return (
    <div className={`flex flex-col bg-color1 font-sans text-color5 `}>
      {selfDestruction && (
        <>
          <Landing />
          <Docs setSelfDestruction={setSelfDestruction} setRoute={setRoute} />
        </>
      )}
      {route === "Responsive Text" && <ResponsiveText />}
      {route === "Responsive Dimensions" && <ResponsiveDimensions />}
    </div>
  );
}
