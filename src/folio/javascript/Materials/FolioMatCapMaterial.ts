import * as THREE from "three";

import shaderFragment from "../../shaders/matcap/fragment.glsl";
import shaderVertex from "../../shaders/matcap/vertex.glsl";

export class FolioMatCapMaterial extends THREE.ShaderMaterial {
  constructor(matcap: THREE.Texture) {
    const uniforms = {
      ...THREE.UniformsLib.common,
      ...THREE.UniformsLib.bumpmap,
      ...THREE.UniformsLib.normalmap,
      ...THREE.UniformsLib.displacementmap,
      ...THREE.UniformsLib.fog,
      matcap: { value: matcap },
      uRevealProgress: { value: 1 },
      uIndirectDistanceAmplitude: { value: 1.75 },
      uIndirectDistanceStrength: { value: 0.5 },
      uIndirectDistancePower: { value: 2.0 },
      uIndirectAngleStrength: { value: 1.5 },
      uIndirectAngleOffset: { value: 0.6 },
      uIndirectAnglePower: { value: 1 },
      uIndirectColor: { value: new THREE.Color("#d04500") },
    };

    super({
      uniforms,
      lights: false,
      vertexShader: shaderVertex,
      fragmentShader: shaderFragment,
    });
  }
}
