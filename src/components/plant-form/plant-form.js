// Packages
import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, useLocation } from "react-router-dom";
import cx from 'classnames';
// Common components
// import Link from 'components/common/route-link';
import PlantsSchema from 'constants/schemas/plants';
// Styles
import './plant-form.scss';

export default function PlantForm({name, ...props}) {

    const [formData, setFormData] = useState(PlantsSchema);
    
    useEffect( ()=> {
        console.log('PlantForm', name, props, formData);
        let fd = formData;
        if( name !== '' ) {
            fd.name = name;
        }   
        setFormData(fd);
    },[])

    function onNameChange(event) {

    }


    const cmpClasses = cx(
        'cmp-plant-form',
    )
    return (
        <div className={cmpClasses}>
            <p> FORM GOES HERE MOTHERFUCKER </p>
            <input value={formData.name} onChange={onNameChange} />
        </div>
    );
}