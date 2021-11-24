// Packages
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaStream, FaBars, FaTimes, FaUserCircle, FaHome, FaLeaf, FaStar, FaQuestionCircle} from 'react-icons/fa';
import cx from 'classnames';

// Components
import NavLink from 'components/nav-link';

import Link from 'components/link';
import RouteLink from 'components/route-link';
import Icon from 'components/icon';
import Button from 'components/button';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

// Helpers
import useWindowSize from '../../helpers/useWindowSize';

// Styles
import './side-nav.scss';





export default function SideNav(props) {
    let auth = useAuth();



    const size = useWindowSize();
    const [mobile, setMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    useEffect(() => {
        if (size.width <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, [size])




    function handleChange(isMenuOpen) {
        setMenuOpen(isMenuOpen);
    }


    return (
        <>
            {mobile ?
                <>

                </>
                :
                <div className='side-nav'>
                    <div className="nav-padding">
                        <RouteLink to="/" icon={<FaHome />} text={"Home"} />
                        <RouteLink to="/plants" icon={<FaLeaf />} text={"Plants"} />
                        <RouteLink to="/wishlist" icon={<FaStar />} text={"Wistlist"} />
                        {/* <div className="flex-grow"></div>  */}

                        <br/>
                        <br/>
                        <RouteLink to="/about" icon={<FaQuestionCircle />} text={"About"} />

                    </div>
                </div>
            }

        </>
    )
}

