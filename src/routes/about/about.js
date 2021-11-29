// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter, FaHeart } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

export default function Home({ ...props }) {
    return (
        <>
            <Page title={"Home"} type={null} className="about">
                <div className="page-inner">
                    <div className="page-padding">
                        <h1 className="center"> About </h1>
                        <p className="center"> Made with <FaHeart style={{ color: 'red' }} /> by <a target="_blank" href="https://teerzo.com"> teerzo </a> </p>
                    </div>
                </div>
            </Page>
        </>
    );
}
