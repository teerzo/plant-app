// Packages
import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaStream, FaBars, FaTimes, FaUserCircle, FaHome, FaLeaf, FaStar } from 'react-icons/fa';

import cx from 'classnames';
// Helpers
import useWindowSize from '../../helpers/useWindowSize';
// Styles
import './route-link.scss';
// Components

import Icon from 'components/icon';


export default function RouteLink({ to, icon, text, expand = false, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    const [expanded, setExpanded] = useState(false);

    function handleMouseOver(event) {
        setExpanded(true)
    }

    function handleMouseLeave(event) {
        setExpanded(false)
    }


    const classes = cx(
        'route-link',
        props.className,
        { 'expand': expand || expanded }
    );

    return (
        <>
            <div className={classes} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <Link to={to}>
                    <div className="inner">
                        <div className="icon-parent">
                            <Icon> {icon} </Icon> 
                        </div>
                        <div className="expand-parent">
                            {expand || expanded ?
                                <> {text} </>
                                :
                                <> </>
                            }
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}