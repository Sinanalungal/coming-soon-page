"use client";

import React from "react";
import ComingSoonPage from "@/components/Comingsoon"
import Particles from "@/components/ui/particles";


const Home: React.FC = () => {
  return (
     <>
     <div className="relative overflow-x-hidden">
     <ComingSoonPage/>
     <Particles
        className="absolute inset-0"
        quantity={60}
        ease={80}
        color={'#ffffff'}
        refresh
      />
     </div>
    </>
  );
};

export default Home;
