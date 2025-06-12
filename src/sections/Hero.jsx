import { section } from "motion/react-client";
import React from "react";
import HeroText from "../components/HeroText";
import ParallexBackground from "../components/ParallexBackground";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import { OrbitControls } from "@react-three/drei";


const Hero = () => {
  return (
    <section className=" flex items-start justify-center md:items-start md:justify-center min-h-scren overflow-hidden ">
      <HeroText />
      <ParallexBackground />
      <figure className="absolute inset-0 overflow-hidden"
              style={{
                width: "100vh",
                height: "100vh"
              }}
                >
                    <Canvas className="overflow-hidden" camera={{position: [0,1,3]}}>
                        <Astronaut scale={0.23} position={[0 , -1.5 , 0]} />
                        <OrbitControls />
                    </Canvas>

                </figure>
    </section>
  );
};

export default Hero;
