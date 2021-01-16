import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './label.scss';

export default function ComponentLabel({ children, align, ...props}) {


    const componentClasses = cx(
        'component-label',
        `align-${align}`
        // {'active': props.location && props.path === props.location.pathname ? true : false }
    )

    return (
        <label className={componentClasses} {...props}>
            {children}
        </label>
    );
}