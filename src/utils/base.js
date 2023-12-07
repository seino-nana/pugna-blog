import * as THREE from 'three'
export default class Base {
    constructor(canvas) {
        // 创建
        this.scene = new THREE.Scene()
        // 摄像机（透视摄像机）
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.001,
            10000
        )
        this.camera.position.z = 4
        this.camera.updateProjectionMatrix()
        // 渲染器
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
        // 渲染背景器或窗口
        // this.renderer.setClearColor(0xffffff)
        // this.renderer.setSize(window.innerWidth,window.innerHeight)
        // 使物体更加清晰
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.shadowMap.enabled = true
        // 坐标系可见
        // const axesHelper = new THREE.AxesHelper(10);
        // this.scene.add(axesHelper);
    }
    update() {
        this.renderer.render(this.scene, this.camera)
    }
    // 自适应
    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
    // 添加环境光
    addAmbientLight(intensity = 1, color = 0xffffff) {
        let light = new THREE.AmbientLight(color, intensity)
        this.scene.add(light)
        return light //修改位置
    }
    // 添加方向光
    addDirLight(intensity = 1, color = 0xffffff) {
        let light = new THREE.DirectionalLight(color, intensity)
        this.scene.add(light)
        return light //修改位置
    }
}