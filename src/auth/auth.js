// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";

// Local 
import { fakeAuthProvider } from 'auth/fakeauth';


let AuthContext = React.createContext(null);


export function useAuth() {
    return useContext(AuthContext);
    // return true;
}

export function AuthProvider({ ...props }) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}