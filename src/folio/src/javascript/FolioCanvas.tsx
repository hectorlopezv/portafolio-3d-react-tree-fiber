import { Canvas } from '@react-three/fiber'
import Folio from './Folio'

type Props = {}

export default function FolioCanvas({}: Props) {
  return (
      <Canvas>
          <Folio />
        </Canvas>
  )
}