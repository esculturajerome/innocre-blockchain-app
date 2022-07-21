import React, { useState, useContext, useEffect } from "react";
import Card from "./Card";
import { InnocreContext } from "../context/InnocreContext";
import { useSpring, animated } from "react-spring";

const Cards = () => {
  const propsSpring = useSpring({
    opacity: 1,
    marginRight: 0,
    from: { opacity: 0, marginRight: -50 },
  });

  const { assets } = useContext(InnocreContext);
  return (
    <div className="w-full mx-auto px-4 lg:px-12 max-w-[1600px]">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 pt-8">
        <animated.div style={propsSpring}>
          {assets.map((item) => {
            let asset = item.attributes;

            return <Card key={item.id} item={item} />;
          })}
        </animated.div>
      </div>
    </div>
  );
};

export default Cards;
