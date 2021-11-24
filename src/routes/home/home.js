// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

export default function Home({ ...props }) {
    return (
        <>
            <Page title={"Home"} type={null}>
                <div className="page-padding">
                    {/* <AuthStatus /> */}

                    <h1 className="center"> HOME </h1>

                </div>
                {/* <div className="home page-padding page-layout-centered">
                    <div className="flex-vertical">
                        <div className="flex-horizontal">
                            <OutLink href={"https://github.com/teerzo"}>
                                <FaGithub className="icon" />
                            </OutLink>
                            <OutLink href={"https://twitter.com/teerzo"}>
                                <FaTwitter className="icon" />
                            </OutLink>
                        </div>
                    </div>
                </div> */}
            </Page>
        </>
    );
}

function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {auth.user}!{" "}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
        </button>
        </p>
    );
}
