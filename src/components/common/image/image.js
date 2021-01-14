// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
// Styles
import './image.scss';

export default function Image({ src, width, height, border, text, ...props }) {
    const cmpClasses = cx(
        'common-image',
        { 'border': border ? true : false }
        // 'link',
        // {'active': props.location && props.path === props.location.pathname ? true : false },
        // {'noborder': props.noBorder }
    )
    const style = {
        width: width ? width : '100%',
        height: height ? height : '100%'
    }
    const imgStyle = {
        backgroundImage: `url(${src})`,
    }
    return (
        <div className={cmpClasses} style={style}> 

            <div className="img" style={imgStyle}> 
            
            </div> 

            {/* <img src={src}/> */}

            <div className="text"> 
                {text}
            </div>

        </div>
    );
}