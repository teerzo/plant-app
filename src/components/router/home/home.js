// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
// Styles
import './home.scss';

export default function Home(props) {

    const cmpClasses = cx(
        'route-home',
    )

    return (
        <div className={cmpClasses}>
            <div className="overlay full-height">
                <div className="flex-column full-height">
                    <p> Jungle in my plants <br /> coming soon </p>
                </div>
            </div>
        </div>
    );
}