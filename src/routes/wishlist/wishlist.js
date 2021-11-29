// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

export default function Wishlist({ ...props }) {
    return (
        <>
            <Page title={"Wishlist"} type={null} className="wishlist">
                <div className="page-inner">
                    <div className="page-padding">
                        <h1 className="center"> Wishlist </h1>
                    </div>
                </div>
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
