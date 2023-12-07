<script setup>
import { onMounted, ref } from "vue";
import Base from "@/utils/base.js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; //gltf
let GLTFloader = new GLTFLoader();
let mixer;
let base, controls;
let earth;
let plantMesh;
let curve;
const canvasDom = ref(null);
const textureloader = new THREE.TextureLoader();
onMounted(() => {
  base = new Base(canvasDom.value);
  // 物体可操作
  controls = new OrbitControls(base.camera, base.renderer.domElement);

  base.addAmbientLight(0.8); //环境光
  let dirlight = base.addDirLight(1); // 方向光
  dirlight.position.set(-20, 10, 10);

  CreateCurve();
  createCircle();
  CreatePlant();
  
  // 渲染
  update();
  // 自适应
  window.addEventListener("resize", resize);
});
// 创建时针
let clock = new THREE.Clock();
function update() {
  requestAnimationFrame(update);
  // 设置canvas的颜色，透明度跟尺寸
  base.renderer.setClearColor(0xcccccc, 0);
  base.renderer.setSize(800, 500);
  // 渲染
  base.update();

  // 通过时针完成动画
  mixer.update(clock.getDelta());
  // 获取曲线上的点，让飞机持续在曲线上运动
  // 获取当前时间
  let elapsed = clock.getElapsedTime();
  // 获取曲线上的点
  let pointOnCurve = curve.getPointAt((elapsed % 8) / 8);
  plantMesh.position.copy(pointOnCurve);
}
function resize() {
  base.resize();
}
// 创建地球
function createCircle() {
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    map: textureloader.load("/earth.jpg"),
    // 高光颜色
    specular: "#fff",
    // 高光强度
    shininess: 5,
  });
  earth = new THREE.Mesh(geometry, material);
  base.scene.add(earth);
  //   添加动画
  let group = new THREE.AnimationObjectGroup();
  group.add(earth);
  // 创建旋转关键帧轨迹
  const rotationTrack = new THREE.VectorKeyframeTrack(
    ".rotation[y]", // 关键帧轨迹路径，这里指的是对象绕 y 轴的旋转
    [0, 2, 4, 8], // 添加一个额外的关键帧，完成一次旋转
    [0, -Math.PI / 2, -Math.PI, -2 * Math.PI] // 为完成一次旋转添加 2 * Math.PI
  );
  // 将关键帧轨迹组合到动画剪辑中
  const clip = new THREE.AnimationClip("test", -1, [rotationTrack]);
  //  播放动画
  mixer = new THREE.AnimationMixer(group);
  mixer.clipAction(clip).play();
}
// 创建飞机
function CreatePlant() {
    // const geometry = new THREE.ConeGeometry(0.1, 0.5, 12);
    // const material = new THREE.MeshBasicMaterial({ color: "#1abc9c" });
    // plantMesh = new THREE.Mesh(geometry, material);
    // // 将飞机模型添加到场景
    // base.scene.add(plantMesh);
    // plantMesh.rotateX(-Math.PI / 2);
    GLTFloader.load('/glb/chicken.glb',(glhf) => {
    plantMesh = glhf.scene
    base.scene.add(plantMesh)
  })
}
// 创建曲线
function CreateCurve() {
  curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(0, 0, -3),
      new THREE.Vector3(-3, 1, 0),
      new THREE.Vector3(-3, 0, 1),
      new THREE.Vector3(0, 0, 3),
      new THREE.Vector3(3, 1, 0),
    ],
    true
  );
  const points = curve.getPoints(50);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: 0xff0000,
    // visible: false,
  });
  // Create the final object to add to the scene
  let curveMesh = new THREE.Line(geometry, material);
  base.scene.add(curveMesh);
}
</script>
<template>
  <div class="aboutCircle">
    <canvas ref="canvasDom" id="canvasDom"></canvas>
  </div>
</template>

<style lang="scss" scoped>
#canvasDom {
  width: 100vw;
  height: 100vh;
}
</style>