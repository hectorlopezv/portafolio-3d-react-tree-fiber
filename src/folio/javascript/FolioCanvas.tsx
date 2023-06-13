/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { LinearSRGBColorSpace, NoToneMapping } from "three";
import Folio from "./Folio";

export default function FolioCanvas() {
  return (
    <Canvas
      gl={{
        pixelRatio: 2,
        useLegacyLights: true,
        autoClear: false,
        outputColorSpace: LinearSRGBColorSpace,
        toneMapping: NoToneMapping,
      }}
    >
      <color attach="background" args={[0x000000]} />
      <Folio />
    </Canvas>
  );
}
