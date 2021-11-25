// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import cx from 'classnames';

// Components
import Page from 'components/page';
import Button from 'components/button';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

import './forgot.scss';

export default function Forgot({ ...props }) {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    let from = location.state?.from?.pathname || "/";

    function handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let username = formData.get("username");

        auth.signin(username, () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, { replace: true });
        });
    }

    return (
        <>
            <Page className="page-login" title={"Login"} type={'centered'}>
                <div className="page-padding">
                    {/* <p>You must log in to view the page at {from}</p> */}
                    <Form handleSubmit={handleSubmit} />
                </div>
            </Page>
        </>
    );
}

function Form({ handleSubmit, ...propsprops }) {
    return (
        <form className="form" onSubmit={handleSubmit}>

            <h2> Forgot email/password? </h2>

            <div className="form-group">
                <label for="username"> Email/Username: </label>
                <input id="username" name="username" type="text" required/>
            </div>
            <Button type="submit"> Continue </Button>
            <div className="divider"> </div>
            <div className="forgot">
                <Link to="/login"> Log in instead? </Link>
            </div>
        </form>
    )
} 