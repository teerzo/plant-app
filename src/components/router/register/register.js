// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
import InputGroup from 'components/common/input-group';
import Button from 'components/common/button';

// Styles
import './register.scss';

export default function RouteRegister(props) {

    const [email, setEmail] = useState('test@email.com')
    const [username, setUsername] = useState('123');
    const [password, setPassword] = useState('456');
    const [password2, setPassword2] = useState('789');


    function signup() {
        console.log('login', username, password);
    }

    function onUsernameChange(event) {
        if( event.target.value ) {
            setUsername(event.target.value);
        }
    }
    function onEmailChange(event) {
        if( event.target.value ) {
            setEmail(event.target.value);
        }
    }
    function onPasswordChange(event) {
        if( event.target.value ) {
            setPassword(event.target.value);
        }
    }
    function onPassword2Change(event) {
        if( event.target.value ) {
            setPassword2(event.target.value);
        }
    }


    const cmpClasses = cx(
        'route-register',
    )
    return (
        <div className={cmpClasses}>
            <div className="overlay">

                    {/* <div className="section"> </div> */}

                <div className="flex-col center">
                    <h3> Sign Up </h3>
                    <InputGroup id="username" name="username" label="Username:" flex="col" align="left" value={username} onChange={onUsernameChange} />
                    <InputGroup id="email" name="email" label="Email:" flex="col" align="left" value={email} onChange={onEmailChange} />
                    <InputGroup id="password" name="password" label="Password:" flex="col" align="left" value={password} onChange={onPasswordChange} />
                    <InputGroup id="password2" name="password2" label="Confirm password:" flex="col" align="left" value={password2} onChange={onPassword2Change} />
                    <div className="divider"> </div>
                    <Button onClick={signup}> Sign Up </Button>
                </div>
            </div>
        </div>
    );
}