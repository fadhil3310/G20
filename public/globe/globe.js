import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const globeCanvas = document.querySelector('#globe-canvas')


/**/

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer({ canvas: globeCanvas, alpha: true })
renderer.toneMapping = THREE.NoToneMapping

window.cameraOrigin = new THREE.Group()
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
window.cameraOrigin.add(camera)
camera.position.z = 10
scene.add(window.cameraOrigin)

window.globe


function renderGlobe() {
    requestAnimationFrame(renderGlobe)
    renderer.render(scene, camera)
    
    window.globe.rotation.y += moveSpeed
    if (window.globe.rotation.y > 360) {
        window.globe.rotation.y = window.globe.rotation.y - 360
    }
    //window.cameraOrigin.rotation.y += 0.01
}

function mulai() {
    console.log('Jalan')

    const loader = new THREE.ObjectLoader()
    loader.load('../scene.json', obj => {
        console.log(obj)
        scene.add(obj)

        window.globe = obj.children.find(x => x.uuid == 'd1d096de-c590-46b4-bbc1-349734b702b9')

        renderGlobe()
    }, xhr => console.log('loading'), err => console.log("error loading", err))


    let isDown = false
    let firstX
    let firstY
    window.addEventListener('pointerdown', ev => {
        isDown = true
        firstX = ev.screenX
        firstY = ev.screenY
    })
    window.addEventListener('pointermove', ev => {
        if (isDown) {
            let x = (ev.screenX - firstX) / 250
            let y = (ev.screenY - firstY) / 250
            window.globe.rotation.x += y
            window.globe.rotation.y += x
            firstX = ev.screenX
            firstY = ev.screenY
            console.log(window.globe.rotation.y)
        }
    })
    window.addEventListener('pointerup', ev => {
        isDown = false
    })
}
mulai()


