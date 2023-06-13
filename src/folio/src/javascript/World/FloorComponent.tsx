import { Plane } from "@react-three/drei/index.cjs";
import { useControls } from "leva";

type Props = {}

export default function FloorComponent({ }: Props) {
    const { topLeftColor, topRightColor,bottomLeftColor,bottomRightColor } = useControls({
        topLeftColor: "#f5883c",
        topRightColor: "#ff9043",
        bottomLeftColor: "#f5aa58",
        bottomRightColor: "#fccf92",
    }, {
        collapsed: true,
        color: "#f58e11"
    });
  return (
      <Plane args={[2,2]} frustumCulled={false} matrixAutoUpdate={false}>
          <floorMaterial
              topLeftColor={topLeftColor}
              topRightColor={ topRightColor}
              bottomLeftColor={bottomLeftColor}
              bottomRightColor={bottomRightColor} />
    </Plane>
  )
}