import { Object3DNode, extend } from "@react-three/fiber";
import { FloorMaterial } from "./folio/javascript/World/FloorMaterial";
extend({ FloorMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    floorMaterial: Object3DNode<FloorMaterial, typeof FloorMaterial>;
  }
}
