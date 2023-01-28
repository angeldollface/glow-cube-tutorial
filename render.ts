import * as THREE from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export function renderModel(): void {
    let scene: THREE.Scene = new THREE.Scene();
    let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth/window.innerHeight,
        0.01,
        1000
    );

    const meshColor: THREE.Color = new THREE.Color(0xFFFFFF)
    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshStandardMaterial({color:meshColor});
    const cube = new THREE.Mesh(geometry,material);
    cube.material.emissive = new THREE.Color(0xFFFFFF);
    cube.material.emissiveIntensity = 10;
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 1.5;
    cube.rotation.y = 1.5;
    scene.background = new THREE.Color(0x000000);
    scene.add(cube);

    var renderer = new THREE.WebGLRenderer(
        {
          antialias: true
        }
    );
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const renderScene = new RenderPass( scene, camera );
	const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
	bloomPass.threshold = 0;
    bloomPass.strength = 0.8;
	bloomPass.radius = 0.001
    var composer = new EffectComposer( renderer );
	composer.addPass( renderScene );
	composer.addPass( bloomPass );

    const animate = () => {
        composer.render();
        cube.rotation.z -= 0.015;
        cube.rotation.y -= 0.015;
        requestAnimationFrame(animate);
    }

    animate();
}

export default renderModel;