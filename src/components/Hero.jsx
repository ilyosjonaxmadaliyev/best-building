import logo from "../../public/logo.png";
import { FaChevronDown } from "react-icons/fa6";

function Hero() {
  return (
    <div className="flex items-center justify-center flex-col pt-40">
      <h1 className="uppercase text-6xl text-white pt-28">
        Lorem ipsum dolor sit amet.
      </h1>
      <p className="text-white text-2xl pt-72">Scrol down for more</p>
      <FaChevronDown className="text-8xl pt-7 text-white animate-bounce" />
    </div>
  );
}

export default Hero;
