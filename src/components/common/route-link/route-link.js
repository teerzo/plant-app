// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
// Styles
import './route-link.scss';

export default function RouteLink({ location, path, className, ...props }) {
    const cmpClasses = cx(
        'common-route-link',
       
        {'active': location && path === location.pathname ? true : false },
        {'noborder': props.noBorder },
        className,
    )

    return (
        <Link to={path} className={cmpClasses}>
            {props.children}
        </Link>
    );
}