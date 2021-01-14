import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './input.scss';

export default function CmpInput(props) {


    const componentClasses = cx(
        'component-input',
        // {'active': props.location && props.path === props.location.pathname ? true : false }
    )

    return (
        <input className={componentClasses} {...props}/>
    );
}