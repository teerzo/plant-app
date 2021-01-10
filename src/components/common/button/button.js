import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './button.scss';

export default function CmpLink(props) {
    console.log('link', props.match, props.path);


    const componentClasses = cx(
        'component-button',
        // {'active': props.location && props.path === props.location.pathname ? true : false }
    )

    return (
        <div className={componentClasses} {...props}>
            {props.children}
        </div>
    );
}