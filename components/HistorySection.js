import React, { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import net from "vanta/dist/vanta.cells.min";

import * as THREE from "three";
import { Link } from "react-scroll";
import Cards from "./Cards";
import { InnocreContext } from "../context/InnocreContext";

export default function HistorySection() {
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
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: 0x0,
          color2: 0x122144,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const { ownedItems } = useContext(InnocreContext);
  return (
    <div className="h-[200px]  bg-black  pb-[50px]" ref={vantaRef} id="main">
      <div className=" w-full h-full flex items-center pl-12 pt-10">
        <h2 className="text-white text-2xl font-bold text-left">
          {ownedItems ? "Purchase History" : "No Purchase History"}
        </h2>
      </div>
    </div>
  );
}
