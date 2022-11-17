import { useGetVisualizerDataQuery } from "../../store/apis/restApis";
import CoinGraph from "../CoinGraph";

const Visualizer = (props) => {
  return (
    <div className="mb-10">
      <div className=" w-full glass1 rounded-md p-2 my-2 grid place-items-center text-white font-extrabold">
        <h3>CRYPTO VISUALIZER</h3>
      </div>

      <CoinGraph graphDataHook={useGetVisualizerDataQuery} />
    </div>
  );
};

export default Visualizer;
