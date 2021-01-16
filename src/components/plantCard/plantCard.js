import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { deletePlant } from '../../actions/plants';

import RouteLink from 'components/common/route-link';
import Image from 'components/common/image';
import Icon from 'components/common/icon';
import './plantCard.scss';

import { BsDropletFill, BsDropletHalf, BsDroplet } from 'react-icons/bs';

export default function PlantTile({ item, ...props }) {
    const route = `/plants?${item._id}`;

    const currentId = item._id;

    const dispatch = useDispatch();
    const [image, setImage] = useState(item.image ? `${process.env.PUBLIC_URL}/${item.image}.png` : `${process.env.PUBLIC_URL}/monstera-full.png`);


    // const style = {
    //     // gridColumnStart: item.col,
    //     // gridRowStart: item.row,
    //     backgroundImage: `url(${image})`,
    // }

    function removePlant() {
        if (currentId) {
            dispatch(deletePlant(currentId));
        }
    }

    const cmpClasses = cx(
        'plantTile',
    )

    const typeClasses = cx(
        'type',
        item.rarity ? item.rarity.toLowerCase() : item.rarity
    )


    return (
        <div className={cmpClasses}>

            <div className="delete" onClick={removePlant}> X </div>


            <div className="title">
                {item.name}
            </div>
            <div className="image-parent">
                <RouteLink path={route}>
                    <Image src={image}

                    // text="background text here" 
                    // height={200}
                    // border={true} 
                    />
                </RouteLink>

            </div>

            <div className={typeClasses}>
                <p> {item.type} </p>
            </div>

            {/* <div className="info">

                <Slider color="#0070dd" value={item.water} text={`Water ${item.water}`} item={item}/> 
                <Slider color="#ffe734" value={item.sun} text={`Sun ${item.sun}`} item={item}/> 
                <Slider color="#31d72f" value={item.price} text={`Price ${item.price}`} item={item}/> 
            </div> */}




        </div>
    );
}



function Slider({ item, color, text, value, ...props }) {

    const innerStyle = {
        backgroundColor: `${color}`,
        borderColor: `${color}`
    }

    const handleStyle = {
        left: `${25 * (value ? value : 0)}%`
    }





    return (
        <div className="slider">
            <div className="inner" style={innerStyle}> </div>
            <div className="handle" style={handleStyle}>
                <Icon color="white">
                    <BsDropletFill />
                </Icon>



            </div>
            <div className="text"> {text} </div>
        </div>
    )
}