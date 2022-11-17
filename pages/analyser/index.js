import dynamic from "next/dynamic";

const Analyser = dynamic(() => import("../../components/Analyser"), {
  ssr: false,
});

const AnalyserPage = (props) => {
  return (
    <div>
      <Analyser />
    </div>
  );
};

export default AnalyserPage;
