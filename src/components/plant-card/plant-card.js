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
    const [beta, setBeta] = useState(0);
    const [alpha, setAlpha] = useState(0);

    window.addEventListener('deviceorientation', function (e) {
        var x = e.beta;  // In degree in the range [-180,180], x, 'front to back'
        var y = e.gamma; // In degree in the range [-90,90], y, 'left to right'
        var z = e.alpha; // 0-360, z, compass orientation

        // console.log('x', x);
        // console.log('y', y);

        setAlpha(z);
        setBeta(x);
        setGamma(y);

        // // coord 1: 0,0
        // // coord 2: x,y
        // // calculate the angle
        // var rad = Math.atan2(y, x);
        // var deg = rad * (180 / Math.PI);

        // // take into account if phone is held sideways / in landscape mode
        // var screenOrientation = window.screen.orientation || window.screen.mozOrientation || window.screen.msOrientation;
        // // 90, -90, or 0
        // var angle = screenOrientation.angle || window.orientation || 0;

        // deg = deg + angle;

        // console.log('deg', deg);

        // watercup.innerHTML = Math.round(deg);

        // var alphaRotation = e.alpha ? e.alpha * (Math.PI / 600) : 0;
        // var betaRotation = e.beta ? e.beta * (Math.PI / 600) : 0;
        // // var gammaRotation = e.gamma ? e.gamma * (Math.PI / 600) : 0;
        // var gammaRotation = e.gamma;
        // // monogram.rotation.y = gammaRotation;
        // console.log('gamma', gammaRotation);
        // setGamma(alphaRotation);
        // setGamma(betaRotation);
        // setGamma(gammaRotation);

    });



    useFrame(({ clock, camera }, delta) => {
        controls.current.enabled = false;

        let newPos = new THREE.Vector3().copy(position);

        // newPos.x += 10 * gamma * (Math.PI / 600);
        // newPos.y += 10 * beta * (Math.PI / 600);

        // newPos.x+=Math.sin(gamma * (Math.PI / 600) )*1;
        // newPos.y+=Math.cos(beta * (Math.PI / 600))*1;

        // let _gamma = gamma * (Math.PI / 360);
        // let _beta = beta * (Math.PI / 360);

        // let _gamma = 2 *  Math.PI / gamma;
        // let _beta = 2 * Math.PI / beta;

        // 2 * Math.PI * radius;

        // console.log('math?', Math.PI / 600 );

        // newPos.x = newPos.x + (Math.sin( _gamma) * 2);
        // newPos.y = newPos.y + (Math.cos( _beta) * 2);
    

        // newPos.x = newPos.x * Math.cos(1) + newPos.z * Math.sin(1);
        // newPos.z = newPos.z * Math.cos(1) - newPos.z * Math.sin(1);
        // camera.position.copy(newPos);

        if( gamma > 40 ) gamma = 40;
        if( gamma < -40) gamma = -40;

        const _gamma = (gamma * (Math.PI / 600) )*1;

        var x = position.x,
        y = position.y,
        z = position.z;

        let rotSpeed = 0.01;

        camera.position.x = x * Math.cos(_gamma) + z * Math.sin(_gamma);
        camera.position.z = z * Math.cos(_gamma) - x * Math.sin(_gamma);

        // targetPosition.x = initialPosition.x + (Math.sin((Date.now() % timerRand) / timerRand * Math.PI * 2) * 1);


        // controls.current.target.lerp(target, 0.1);

        controls.current.update()
    });

    // return <DeviceOrientationControls ref={controls} args={[camera, domElement]} />;
    return <OrbitControls ref={controls} args={[camera, domElement]} />;
};


