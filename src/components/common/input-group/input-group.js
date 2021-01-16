// Packages
import React, { useEffect, useState } from 'react';
import cx from 'classnames';
// Common components
import Label from 'components/common/label';
import Input from 'components/common/input';
// Styles
import './input-group.scss';

export default function CmpInputGroup({ label, flex, align, ...props }) {


    const componentClasses = cx(
        'component-input-group',
        `flex-${flex}`,
        `align-${align}`
    )   

    return (
        <div className={componentClasses}>
            <Label align={align}> {label} </Label>
            <Input {...props} />
        </div>
    );
}