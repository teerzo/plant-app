// Packages
import ReactDOM from 'react-dom'
import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader, extend, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, DeviceOrientationControls } from '@react-three/drei';
import { useLocation } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'

// Components
import Page from 'components/page';
import Link from 'components/link';
import Icon from 'components/icon';
// Auth
import { AuthProvider, useAuth } from 'auth/auth';

// Objects 
import Cube from '../../objects/cube';


// Styles
import './plant-card.scss';

export default function PlantCard({ name, ...props }) {
    const DisableRender = () => useFrame(() => null, 1000)
    const { ref, inView } = useInView()

    const [show, setShow] = useState(false);

    const [target, setTarget] = useState(new THREE.Vector3(0, 0, 0));
    const [cameraPos, setCameraPos] = useState(new THREE.Vector3(0, 0, 3));

    useEffect(() => {
        console.log('PlantCard', props);

        const timer = setTimeout(() => {
            setShow(true);
        }, 1000 * props.index);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        if (inView) {
            const timer = setTimeout(() => {
                setShow(true);
            }, 500);
            return () => clearTimeout(timer);
        }
        else {
            setShow(false);
        }
    }, [inView])

    return (
        <Link to="/plants/1">
            <div ref={ref} className="plant-card">
                <div className="title"> {name} </div>

                <div className="inner">
                    {inView && show ?
                        <Canvas gl={{ antialias: true }} pixelRatio={window.devicePixelRatio}>
                            {!inView && <DisableRender />}

                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <CameraControls target={target} position={cameraPos} />

                            <Cube color={'red'} scale={20} wireframe={true} args={[100, 100, 100, 4, 4, 4]}></Cube> />
{/* 
                            <Box args={[100, 100, 100, 4, 4, 4]}>
                                <meshBasicMaterial attach="material" wireframe />
                                <axesHelper args={[100]} />
                            </Box> */}

                            <Cube color={'red'} position={new THREE.Vector3(0, 0, 0)} />
                            <Cube color={'green'} position={new THREE.Vector3(0, 1, 0)} />
                            <Cube color={'blue'} position={new THREE.Vector3(1, 0, 0)} />
                            <Cube color={'yellow'} position={new THREE.Vector3(0, -1, 0)} />
                            <Cube color={'orange'} position={new THREE.Vector3(-1, 0, 0)} />
                        </Canvas>
                        : <> </>
                    }
                </div>
            </div>
        </Link>
    )
}


const CameraControls = ({ target, position, ...props }) => {
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    const {
        camera,
        gl: { domElement },
    } = useThree();
    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();

    const [gamma, setGamma] = useState(0);

    window.addEventListener('deviceorientation', function(e) {
        var gammaRotation = e.gamma ? e.gamma * (Math.PI / 600) : 0;
        // monogram.rotation.y = gammaRotation;
        console.log('gamma', gammaRotation);
        setGamma(gammaRotation);
    });

    useEffect(() => {
        if (camera) {
            // const quaternion = new THREE.Quaternion();
            // quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );
            // console.log(controls);
            // controls.current.quaternion.rotateTowards(quaternion, 1);

            // // console.log('camera', camera);
            // // console.log('current', ref.current);
            // const targetQuaternion = camera.quaternion;
            // // if (!modelMesh.quaternion.equals(targetQuaternion)) {
            // if (!ref.current.quaternion.equals(targetQuaternion)) {
            //     var step = 100 * delta;
            //     ref.current.quaternion.rotateTowards(targetQuaternion, step);
            // }
        }

    },[controls])


    useFrame(({ clock, camera }, delta) => {

        let newPos = new THREE.Vector3().copy(position);

        newPos.x += 10 * gamma;

        camera.position.lerp(newPos, 0.1);

        // controls.current.enabled = false;

        // console.log('controls', controls.current);

        // const currentPos = 


        //     // lerp to target position
        // lerpPosition.lerpVectors(targetPos, target, Math.sin(clock.getElapsedTime()));

        // // console.log('lerp position', lerpPosition);

        // camera.position.x = lerpPosition.x;
        // camera.position.y = lerpPosition.y;
        // camera.position.z = lerpPosition.z;

        // const num = Math.sin(clock.getElapsedTime());
        // // console.log('num', num);

        // console.log('controls', controls.current);
        // controls.current.target.lerp(newTarget, 0.1);
        // controls.current.position0.lerp(position, 1);

        // console.log('camera', camera);
        camera.position.lerp(position, 0.1);

        // camera.position.z += 1 * delta;

        controls.current.update()
    });

    // return <DeviceOrientationControls ref={controls} args={[camera, domElement]} />;
    return <OrbitControls ref={controls} args={[camera, domElement]} />;
};


