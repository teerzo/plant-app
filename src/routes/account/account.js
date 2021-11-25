// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';
import AuthStatus from 'components/auth-status';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

export default function Account({ onChange, ...props }) {
    return (
        <>
            <Page title={'Account'} type={null}>
                <div className="page-padding">
                    <AuthStatus />

                    <h1 className="center"> Account </h1>
                </div>
            </Page>
        </>
    );
}