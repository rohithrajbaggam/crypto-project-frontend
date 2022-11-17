import { useGetAnalyserDataQuery } from "../../store/apis/restApis";
import CoinGraph from "../CoinGraph";

const Analyser = (props) => {
  return (
    <div>
      <div>
        <div className=" w-full glass1 rounded-md p-2 my-2 grid place-items-center text-white font-extrabold">
          <h3>CRYPTO ANALYSER</h3>
        </div>

        <CoinGraph graphDataHook={useGetAnalyserDataQuery} />
      </div>
    </div>
  );
};

export default Analyser;
