import React from "react";
import { useEffect, useRef, useState } from "react";
import net from "vanta/dist/vanta.cells.min";

import * as THREE from "three";
import { Link } from "react-scroll";
import Cards from "./Cards";

export default function MainSection() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        net({
          el: vantaRef.current,
          THREE,

          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.0,
          minWidth: 200.0,
          scale: 1.0,
          size: 4.2,
          speed: 0.0,
          color1: 0x0,
          color2: 0x3559f2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      className="h-full  bg-black min-h-[700px] lg:pb-[50px]"
      ref={vantaRef}
      id="main"
    >
      <Cards />
    </div>
  );
}
