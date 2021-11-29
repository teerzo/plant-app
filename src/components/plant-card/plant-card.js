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

                            <Cube color={'red'} scale={5} wireframe={true} args={[100, 100, 100, 4,4,4]}></Cube> />
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
    const [orientation, setOrientation] = useState(0);

    function setQuaternion(alpha, beta, gamma, orientation) {
       
    }

    window.addEventListener('deviceorientation', function (e) {
        let x = e.beta;  // In degree in the range [-180,180], x, 'front to back'
        let y = e.gamma; // In degree in the range [-90,90], y, 'left to right'
        let z = e.alpha; // 0-360, z, compass orientation

        // let z = e.alpha * (Math.PI / 180);
        // let x = e.beta * (Math.PI / 180);
        // let y = e.gamma * (Math.PI / 180);
        let ori = window.orientation * (Math.PI / 180);

        // // console.log('x', x);
        // // console.log('y', y);

        setAlpha(z);
        setBeta(x);
        setGamma(y);
        setOrientation(ori)
    });



    useFrame(({ clock, camera }, delta) => {
        controls.current.enabled = false;

        // let newPos = new THREE.Vector3().copy(position);

        // // newPos.x += 10 * gamma * (Math.PI / 600);
        // // newPos.y += 10 * beta * (Math.PI / 600);

        // // newPos.x+=Math.sin(gamma * (Math.PI / 600) )*1;
        // // newPos.y+=Math.cos(beta * (Math.PI / 600))*1;

        // // let _gamma = gamma * (Math.PI / 360);
        // // let _beta = beta * (Math.PI / 360);

        // // let _gamma = 2 *  Math.PI / gamma;
        // // let _beta = 2 * Math.PI / beta;

        // // 2 * Math.PI * radius;

        // // console.log('math?', Math.PI / 600 );

        // // newPos.x = newPos.x + (Math.sin( _gamma) * 2);
        // // newPos.y = newPos.y + (Math.cos( _beta) * 2);
    

        // // newPos.x = newPos.x * Math.cos(1) + newPos.z * Math.sin(1);
        // // newPos.z = newPos.z * Math.cos(1) - newPos.z * Math.sin(1);
        // // camera.position.copy(newPos);

        let _gamma = gamma;
        if( _gamma > 40 ) _gamma = 40;
        if( _gamma < -40) _gamma = -40;

        let g = (_gamma * (Math.PI / 600) )*1;

        let _beta = beta - 90;
        // if( _beta > 40 ) _beta = 40;
        // if( _beta < -40) _beta = -40;

        let b = (_beta * (Math.PI / 600) )*1;


        let newPos = new THREE.Vector3().copy(position);

        var x = newPos.x,
        y = newPos.y,
        z = newPos.z;


        newPos.x += x * Math.cos(g) + z * Math.sin(g);
        newPos.z += z * Math.cos(g) - x * Math.sin(g);

        newPos.y += y * Math.cos(b) + z * Math.sin(b);
        // newPos.z += z * Math.cos(b) - y * Math.sin(b);

        camera.position.lerp(newPos, 0.1);
        // camera.position.copy(newPos);


        // controls.current.target.lerp(target, 0.1);

        // const zee = new THREE.Vector3(0, 0, 1);
        // const euler = new THREE.Euler();
        // const q0 = new THREE.Quaternion();
        // const q1 = new THREE.Quaternion(-1 * Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));

        // euler.set(beta, alpha, -1 * gamma, "YXZ");
        
        // console.log('controls', controls.current);

        // controls.current.object.quaternion.setFromEuler(euler);
        // controls.current.object.quaternion.multiply(q1);
        // controls.current.object.quaternion.multiply(q0.setFromAxisAngle(zee, -1 * orientation));

        controls.current.update()
    });

    // return <DeviceOrientationControls ref={controls} args={[camera, domElement]} />;
    return <OrbitControls ref={controls} args={[camera, domElement]} />;
};


