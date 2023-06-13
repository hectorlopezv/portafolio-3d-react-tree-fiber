import {
  Color,
  DataTexture,
  LinearFilter,
  RGBAFormat,
  ShaderMaterial,
} from "three";
import fragmentShader from "../../shaders/floor/fragment.glsl";
import vertexShader from "../../shaders/floor/vertex.glsl";
export class FloorMaterial extends ShaderMaterial {
  private _topLeftColor: Color = new Color(0x000000);
  private _topRightColor: Color = new Color(0x000000);
  private _bottomLeftColor: Color = new Color(0x000000);
  private _bottomRightColor: Color = new Color(0x000000);

  constructor() {
    super();
    this.uniforms = {
      tBackground: { value: null },
    };
    this.fragmentShader = fragmentShader;
    this.vertexShader = vertexShader;
  }

  set topLeftColor(value: string) {
    this._topLeftColor = new Color(value).convertLinearToSRGB();
    this._updateUniforms();
  }
  set topRightColor(value: Color) {
    this._topRightColor = new Color(value).convertLinearToSRGB();
    this._updateUniforms();
  }

  set bottomLeftColor(value: Color) {
    this._bottomLeftColor = new Color(value).convertLinearToSRGB();
    this._updateUniforms();
  }

  set bottomRightColor(value: Color) {
    this._bottomRightColor = new Color(value).convertLinearToSRGB();
    this._updateUniforms();
  }

  private _updateUniforms(): void {
    const data = new Uint8Array([
      Math.round(this._topLeftColor.r * 255),
      Math.round(this._topLeftColor.g * 255),
      Math.round(this._topLeftColor.b * 255),
      255,
      Math.round(this._topRightColor.r * 255),
      Math.round(this._topRightColor.g * 255),
      Math.round(this._topRightColor.b * 255),
      255,
      Math.round(this._bottomLeftColor.r * 255),
      Math.round(this._bottomLeftColor.g * 255),
      Math.round(this._bottomLeftColor.b * 255),
      255,
      Math.round(this._bottomRightColor.r * 255),
      Math.round(this._bottomRightColor.g * 255),
      Math.round(this._bottomRightColor.b * 255),
      255,
    ]);
    const backgroundTexture = new DataTexture(data, 2, 2, RGBAFormat);
    backgroundTexture.magFilter = LinearFilter;
    backgroundTexture.needsUpdate = true;
    this.uniforms.tBackground.value = backgroundTexture;
  }
}
