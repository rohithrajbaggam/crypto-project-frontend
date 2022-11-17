import Link from "next/link";

const Header = (props) => {
  return (
    <div className="glass1 flex items-center p-5 text-white justify-between">
      <h1 className="font-bold text-[20px]">Data Science And Analysis</h1>
      <div className="flex items-center space-x-5">
        <Link href={"/"}>
          <p>Visualizer</p>
        </Link>
        <Link href={"/analyser"}>
          <p>Analyser</p>
        </Link>
        <Link href={"/converter"}>
          <p>Converter</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
