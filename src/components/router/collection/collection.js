// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
// Styles
import './collection.scss';

export default function Collection(props) {

    const cmpClasses = cx(
        'route-collection',
    )
    return (
        <div className={cmpClasses}>
            <div className="overlay">
                <div className="title">
                    <h3> My Collection </h3>
                </div>
                
            </div>
        </div>
    );
}