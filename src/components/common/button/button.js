import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './button.scss';

export default function CmpLink({children, size,...props}) {
    const componentClasses = cx(
        'component-button',
        size,
        // {'active': props.location && props.path === props.location.pathname ? true : false }
    )

    return (
        <button className={componentClasses} {...props}>
            {children}
        </button>
    );
}