import { useGLTF } from "@react-three/drei/index.cjs";
import { useEffect } from "react";
import { Mesh } from "three";
import { useGetMaterial } from "../hooks/materials/useGetMaterial";

interface FolioModelProps {
  path: string;
}
export default function FolioModel({ path }: FolioModelProps) {
  const gltf = useGLTF(path);
  const getMaterial = useGetMaterial();
  useEffect((): void => {
    gltf.scene.traverse((child): void => {
      if (!(child instanceof Mesh)) return;

      child.material = getMaterial(child.name);
    });
  }, []);
  return <primitive object={gltf.scene} />;
}
