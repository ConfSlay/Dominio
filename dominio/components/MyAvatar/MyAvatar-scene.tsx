import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {MyAvatar} from './MyAvatar';

type Props = {
    myAvatarSceneWidth?: string,
    myAvatarSceneHeight?: string,
    backgroundColor?: string,
}

const MyAvatarScene = ({
    myAvatarSceneWidth = "600px",
    myAvatarSceneHeight = "600px",
    backgroundColor = "#000"}:Props) => {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 15 }}
         style={{
            backgroundColor: backgroundColor,
            width: myAvatarSceneWidth,
            height: myAvatarSceneHeight,
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <MyAvatar position={[0.025, -0.9, 0]} /> 
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
};

export default MyAvatarScene