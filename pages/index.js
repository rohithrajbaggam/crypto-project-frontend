import dynamic from "next/dynamic";

import PrizeConverter from "../components/PriceConverter";
const Visualizer = dynamic(() => import("../components/Visualizer/index"), {
  ssr: false,
});
const Analyser = dynamic(() => import("../components/Analyser"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Visualizer />
    </div>
  );
}
