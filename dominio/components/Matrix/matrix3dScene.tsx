import { Props } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type Properties = {
    canvas?: HTMLCanvasElement
}

function Matrix3dScene({ canvas }: Properties) {
  const canvasTextureRef = useRef(null);

  useEffect(() => {
    if (canvas !== undefined) {
        
        const canvasTexture = new THREE.CanvasTexture(canvas);
        canvasTexture.needsUpdate = true;
    
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ map: canvasTexture });
        const mesh = new THREE.Mesh(geometry, material);
    
        const scene = new THREE.Scene();
        scene.add(mesh);
    
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 5;
    
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        // @ts-ignore: Unreachable code error
        function animate() {
          requestAnimationFrame(animate);
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;
          renderer.render(scene, camera);
        }
    
        animate();
    
        const threeContainer = document.getElementById('three-container');
        if (threeContainer !== null) {
            threeContainer.appendChild(renderer.domElement);
        }
    
        return () => {
          // clean up code if necessary
        };
    }
  }, [canvas]);

  return <div id="three-container" />;
}

export default Matrix3dScene;