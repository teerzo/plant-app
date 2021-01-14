// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
import Image from 'components/common/image';
// Styles
import './header.scss';

// Images
import icon from 'images/icon.png';

export default function Header(props) {
    let location = useLocation();
    // const [icon, setIcon] = useState(rocess.env.PUBLIC_URL}/${item.image}.png` : `${process.env.PUBLIC_URL}/monstera-full.png`);

    // useEffect(() => {
    //     console.log('header props', props, location);
    // }, [props])

    const cmpClasses = cx(
        'header',
    )


    return (
        <header className={cmpClasses}>


            <Link path="/">
                <div className="flex-row">
                    <Image src={icon} width={30} height={30} />
                    <span className="title"> Jungle in my plants </span>
                </div>
            </Link>
            <Link className="link" noBorder path="/plants" location={location}> Plants </Link>
            <Link className="link" noBorder path="/collection" location={location}> Collection </Link>
            <Link className="link" noBorder path="/about" location={location}> About </Link>
            {/* <Link path="/children" location={location}> My Kids </Link> */}
            {/* <Link path="/wishlist" location={location}> Kids i plan to steal </Link> */}
            <div className="grow"> </div>

            {/* <Link path="/login" location={location}> Login </Link> */}
        </header >
    );
}