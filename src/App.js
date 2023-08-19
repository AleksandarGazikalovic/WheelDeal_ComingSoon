import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Background, Loading, WheelDeal } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const parallax = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      <Background />
      <Parallax ref={parallax} className="body" pages={2}>
        <ParallaxLayer>
          <Loading isLoading={isLoading} parallax={parallax} />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <WheelDeal />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
