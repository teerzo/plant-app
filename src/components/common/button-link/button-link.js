// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { Link } from "react-router-dom";
// Styles
import './button-link.scss';

export default function CmpButtonLink({children, size, location, path, className, ...props }) {
    const componentClasses = cx(
        'component-button-link',
        size,
        {'active': location && path === location.pathname ? true : false },
        className,    
    )

    return (
        <Link to={path} className={componentClasses} {...props}>
            {children}
        </Link>
    );
}
