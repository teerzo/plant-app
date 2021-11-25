// Packages
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';

import { AuthProvider, useAuth } from 'auth/auth';

export default function PrivateRoute({ path, ...props }) {
    let auth = useAuth();
    let location = useLocation();
    let navigate = useNavigate();


    useEffect(() => {
        // console.log('location', location);
    }, [location]);

    if (!auth.user) {
        // console.log('redirect');
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        // navigate("/login", { replace: true });
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return (
        <>
            {props.children}
        </>
    )
}