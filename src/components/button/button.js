// Packages
import React, { useEffect, useState, useContext } from 'react';
import cx from 'classnames';

// Styles
import './button.scss';

export default function Button({ className, style, children, ...props }) {

    const classes = cx(
        'button',
        className,
    );

    const styles = {
        ...style
        // width: props.width ? props.width : '100%',
        // height: props.height ? props.height : 'auto'
    }

    return (
        <button className={classes} style={styles} {...props}>
            {children}
        </button>
    )
}