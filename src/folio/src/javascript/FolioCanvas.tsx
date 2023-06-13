import { Canvas } from '@react-three/fiber'
import { LinearSRGBColorSpace, NoToneMapping } from 'three'
import Folio from './Folio'

type Props = {}

export default function FolioCanvas({}: Props) {
  return (
    <Canvas gl={{
      pixelRatio: 2,
      useLegacyLights: true,
      autoClear: false,
      outputColorSpace: LinearSRGBColorSpace,
      toneMapping: NoToneMapping
    }}>
      <color attach="background" args={[0x000000]} />
       <Folio />
      </Canvas>
  )
}