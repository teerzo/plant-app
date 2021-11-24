// Packages
import React, { useEffect, useState, useContext } from 'react';
import cx from 'classnames';

// Styles
import './image.scss';

export default function Image({ src, ...props }) {

    const classes = cx(
        'image',
        props.className,
    );

    const styles = {
        width: props.width ? props.width : '100%',
        height: props.height ? props.height : 'auto'
    }

    return (
        <div className={classes} style={styles}>
            <img src={src} />
        </div>
    )
}