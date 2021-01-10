import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './label.scss';

export default function ComponentLabel(props) {


    const componentClasses = cx(
        'component-button',

        // {'active': props.location && props.path === props.location.pathname ? true : false }
    )

    return (
        <div className={componentClasses}>
            {props.children}
        </div>
    );
}