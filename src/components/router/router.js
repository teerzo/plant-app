// Packages
import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useMatch, useResolvedPath } from "react-router-dom";
// import { history } from 'helpers/history';

// Components
import Nav from 'components/nav';
import SideNav from 'components/side-nav';
import Image from 'components/image';
// import Route from 'components/route';
import PrivateRoute from 'components/private-route';
import { AuthProvider, useAuth } from 'auth/auth';

// Routes
import Home from 'routes/home';
import About from 'routes/about';
import Login from 'routes/login';
import Logout from 'routes/logout';
// import Register from './register';

// Private Routes
import Account from 'routes/account';
import Plants from 'routes/plants';
import Wishlist from 'routes/wishlist';
// import Collection from './collection';




export default function Router() {
    // let resolved = useResolvedPath(to);
    let location = useLocation();
    const navRef = useRef();


    useEffect(() => {
        console.log('location?', location);
        console.log('navRef', navRef.current);
        if (navRef.current) {
            navRef.current.closeNav();
        }
    }, [location])


    return (
        <>
            <AuthProvider>
                <div className="container">
                    
                    <Nav ref={navRef} />
                    <SideNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/plants" element={<Plants />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/account" element={
                            <PrivateRoute>
                                <Account />
                            </PrivateRoute>
                        } />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Login />} />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </AuthProvider>
        </>
    )
}

