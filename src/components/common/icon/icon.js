import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import './icon.scss';

export default function ComponentIcon({color, className, ...props}) {
    // console.log('link', props.match, props.path);


    const cmpClasses = cx(
        'component-icon',
        className
    )

    const style = {
        color: color,
    }

    return (
        <div className={cmpClasses} style={style} {...props}> 
          {props.children}
        </div>
    );
}