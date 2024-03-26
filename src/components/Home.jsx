import heroBgVideo from "../../public/home-bg-video.mp4";

import Header from "./Header";
import Hero from "./Hero";

function Home() {
  return (
    <div id="home" className="bg-indigo-700/30 h-screen ">
      <div className="absolute -z-50 h-screen">
        <video autoPlay loop muted src={heroBgVideo} />
      </div>
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
