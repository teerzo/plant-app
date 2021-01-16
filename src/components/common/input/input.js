// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
// Common components
import Label from 'components/common/label';
// Styles
import './input.scss';

export default function CmpInput({ ...props }) {


    const componentClasses = cx(
        'component-input',
    )

    return (
        <input className={componentClasses} {...props} />
    );
}