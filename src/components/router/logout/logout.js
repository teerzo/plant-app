// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
import Link from 'components/common/route-link';
// Styles
import './logout.scss';

export default function Logout(props) {

    const cmpClasses = cx(
        'route-logout',
    )
    return (
        <div className={cmpClasses}>
            <div className="overlay">
                <h3> LOGOUT </h3>


                
            </div>
        </div>
    );
}