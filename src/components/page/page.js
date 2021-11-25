// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

// Styles
import './page.scss';

export default function Page({ type, className, ...props }) {

    const classes = cx(
        'page',
        className,
    )

    return (
        <>
            <div className={classes}>
                {props.children}
            </div>
        </>
    )
}

