"use client";

import React, { useState } from "react";
import ComingSoonPage from "@/components/Comingsoon"
import Particles from "@/components/ui/particles";


const Home: React.FC = () => {
  const [color, setColor] = useState("#ffffff");
  return (
     <>
     <div className="relative overflow-x-hidden">
     <ComingSoonPage/>
     <Particles
        className="absolute inset-0"
        quantity={60}
        ease={80}
        color={color}
        refresh
      />
     </div>
    </>
  );
};

export default Home;
