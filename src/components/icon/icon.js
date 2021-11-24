// Packages
import React, { useEffect, useState, useContext } from 'react';
import cx from 'classnames';

// Styles
import './icon.scss';

export default function Icon({...props}) {

    const classes = cx(
        'icon',
        props.className,
    );

    return (
        <div className={classes}> 
            {props.children}
        </div>
    )
}