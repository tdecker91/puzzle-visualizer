import { RubiksCube } from './../puzzles/rubiksCube/rubiksCube';
import { CustomSVGRenderer } from './../rendering/customSvgRenderer';
import { Scene } from '../rendering/scene';
import { Camera } from './../rendering/camera';
export interface VisualizerOptions {
  test: string
}

export function renderCube(elementId: string) {
  let width: number = 500;
  let height: number = 500;
  let minx: number = -.9;
  let miny: number = -.9;
  let svgwidth: number = 1.8;
  let svgheight: number = 1.8;
  let planewidth: number = 1;
  let strokeWidth: number = .02;

  let camera: Camera = new Camera();
  let scene = new Scene();
  let renderer = new CustomSVGRenderer(width, height, minx, miny, svgwidth, svgheight);
  renderer.strokeWidth = "" + strokeWidth;

  let rubiksCube = new RubiksCube(5);
  scene.add(rubiksCube.group);

  renderer.strokeWidth = '' + strokeWidth;
  document.getElementById(elementId).appendChild(renderer.domElement);
  renderer.render(scene, camera);
}