import { mat4, ReadonlyVec3, vec3 } from "gl-matrix";
import { IColor } from "./color";
import { generateUid } from "./uid";

export class Object3D {
  matrix: mat4;
  uid: number;
  color?: IColor;
  centroid: vec3;

  constructor() {
    this.uid = generateUid();
    this.matrix = mat4.create();
    this.centroid = [0, 0, 0];
  }

  translate(vector: ReadonlyVec3) {
    mat4.translate(this.matrix, this.matrix, vector);
  }

  rotate(rad: number, axis: ReadonlyVec3) {
    mat4.rotate(this.matrix, this.matrix, rad, axis);
  }

  scale(v: vec3) {
    mat4.scale(this.matrix, this.matrix, v);
  }

  setColor(color: IColor) {
    this.color = color;
  }
}
