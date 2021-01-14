// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
import { FaTimes, FaBars } from "react-icons/fa";
// Common components
import Link from 'components/common/route-link';
import Image from 'components/common/image';
import Icon from 'components/common/icon';
// Helpers
import useWindowDimensions from 'helpers/window-size';
// Styles
import './header.scss';
// Images
import icon from 'images/icon.png';

export default function Header(props) {
    let location = useLocation();
    const [lastLocation, setLast] = useState(null);

    const { height, width } = useWindowDimensions();
    const [menu, setMenu] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if (width <= 600) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, [width]);

    useEffect(() => {
        console.log('location', location);
        console.log('last', lastLocation);
        if (!lastLocation || lastLocation.pathname !== location.pathname) {
            hideMenu();
        }
    }, [location]);

    function showMenu() {
        setMenu(true);
    }
    function hideMenu() {
        setMenu(false)
    }


    const cmpClasses = cx(
        'header',
        { 'mobile': width <= 600 ? true : false }
    )


    return (
        <header className={cmpClasses}>
            <div className="inner">
                {mobile ? menu ?
                    <Icon className="close" onClick={hideMenu}>
                        <FaTimes />
                    </Icon>
                    :
                    <Icon className="open" onClick={showMenu}>
                        <FaBars />
                    </Icon>
                    : null
                }
                <div className="title">
                    <Link path="/">
                        <div className="flex-row">
                            {/* <Image src={icon} width={30} height={30} /> */}
                            <h3> Jungle in my plants </h3>
                        </div>
                    </Link>
                </div>
                {mobile ? menu ?
                    null
                    : null
                    :
                    <div className="links">
                        <Link className="link" noBorder path="/plants" location={location}> Plants </Link>
                        <Link className="link" noBorder path="/collection" location={location}> Collection </Link>
                        <Link className="link" noBorder path="/about" location={location}> About </Link>
                        <div className="grow"> </div>
                    </div>
                }
                <div className="grow"> </div>

            </div>
            {mobile ? menu ?
                <div className="links-parent">
                    <div className="links">
                        <Link className="link" noBorder path="/plants" location={location}> Plants </Link>
                        <Link className="link" noBorder path="/collection" location={location}> Collection </Link>
                        <Link className="link" noBorder path="/about" location={location}> About </Link>
                        <div className="grow"> </div>
                    </div>
                </div>
                : null
                : null
            }
        </header>
    );
}