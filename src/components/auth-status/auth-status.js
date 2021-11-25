// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import cx from 'classnames';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

// Styles
import './auth-status.scss';

export default function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    return (
        <>
            <div className="auth-status">
                {!auth.user ?
                    <> </>
                    :
                    <>
                        <p> Welcome {auth.user}!{" "} </p>
                    </>
                }
            </div>
        </>
    );
}
