import { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0.2, 0]}
      position={[0, 0, -0.14]}
    >
      {/* Warm main light */}
      <RandomizedLight
        amount={4}
        radius={12}
        intensity={0.6}
        ambient={0.2}
        color="goldenrod"
        position={[8, 7, -12]} // Positioned above and behind
      />

      {/* Cool accent light */}
      <RandomizedLight
        amount={2}
        radius={7}
        intensity={0.4}
        ambient={0.4}
        color="skyblue"
        position={[-5, 3, -9]} // Positioned to the left and behind
      />

      {/* Subtle background light */}
      <RandomizedLight
        amount={4}
        radius={15}
        intensity={0.2}
        ambient={0.6}
        color="lightpink"
        position={[0, -3, -15]} // Positioned below and behind
      />

      <RandomizedLight
        amount={2}
        radius={5}
        intensity={0.3}
        ambient={0.5}
        color="purple"
        position={[-8, -5, -10]} // Experiment with position
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
