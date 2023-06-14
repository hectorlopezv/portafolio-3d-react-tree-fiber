import { useGLTF, useTexture } from "@react-three/drei/index.cjs";
import { forwardRef, useEffect } from "react";
import { Mesh, PlaneGeometry } from "three";
import { isFloor, useGetMaterial } from "../hooks/materials/useGetMaterial";

interface FolioModelProps {
  path: string;
  floorShadowPath: string;
}

const FolioModel = forwardRef(
  ({ path, floorShadowPath }: FolioModelProps, ref) => {
    const gltf = useGLTF(path);
    const floorShadowTexture = useTexture(floorShadowPath);
    const getMaterial = useGetMaterial();
    useEffect((): void => {
      gltf.scene.traverse((child): void => {
        if (!(child instanceof Mesh)) return;

        if (isFloor(child.name)) {
          child.geometry = new PlaneGeometry();
        }

        child.material = getMaterial(child.name, floorShadowTexture);
      });
    }, [getMaterial]);
    return <primitive object={gltf.scene} ref={ref} />;
  }
);
FolioModel.displayName = "FolioModel";
export default FolioModel;
