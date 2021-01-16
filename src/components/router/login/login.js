// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
import InputGroup from 'components/common/input-group';
import Button from 'components/common/button';

// Styles
import './login.scss';

export default function RouteLogin(props) {

    const [username, setUsername] = useState('123');
    const [password, setPassword] = useState('456');


    function login() {
        console.log('login', username, password);
    }

    function onUsernameChange(event) {
        if( event.target.value ) {
            setUsername(event.target.value);
        }
    }
    function onPasswordChange(event) {
        if( event.target.value ) {
            setPassword(event.target.value);
        }
    }


    const cmpClasses = cx(
        'route-login',
    )
    return (
        <div className={cmpClasses}>
            <div className="overlay">

                    {/* <div className="section"> </div> */}

                <div className="flex-col center">
                    <h3> Login </h3>
                    <InputGroup id="username" name="username" label="Username:" flex="col" align="left" value={username} onChange={onUsernameChange} />
                    <InputGroup id="password" name="password" label="Password:" flex="col" align="left" value={password} onChange={onPasswordChange} />
                    <div className="divider"> </div>
                    <Button onClick={login}> Login </Button>
                </div>
            </div>
        </div>
    );
}