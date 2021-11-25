// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';
import Image from 'components/image';
import AuthStatus from 'components/auth-status';
// Auth
import { AuthProvider, useAuth } from 'auth/auth';

import monsteraImg from 'images/monstera-full.png';


export default function Home({ ...props }) {
    return (
        <>
            <Page title={"Home"} type={null}>
                <div className="page-padding">
                    <AuthStatus />

                    <h1 className="center"> Coming soon... </h1>

                    <div className="center">
                        <Image src={monsteraImg} styles={{"maxWidth": '300px'}} />
                    </div>

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
