// Packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

// Common components
import Link from 'components/common/route-link';
import Icon from 'components/common/icon';
import Label from 'components/common/label';
import Input from 'components/common/input';
import Button from 'components/common/button';
// Local 
import PlantCard from 'components/plantCard';
import PlantForm from 'components/plant-form';
// actions
import { getPlants, createPlant, updatePlant } from 'actions/plants';



// Styles
import './plants.scss';

export default function Home(props) {

    const cmpClasses = cx(
        'route-home',
    )

    return (
        <div className={cmpClasses}>
            {/* <div className="overlay full-height">
                <div className="flex-column full-height">
                    <p> Jungle in my plants <br /> coming soon </p>
                </div>
            </div> */}

            <PlantsList />
        </div>
    );
}

function PlantsList(props) {
    const plants = useSelector((state) => state.plants);
    const dispatch = useDispatch();

    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);
    const currentId = 0;

    const [form, setForm] = useState(false);

    useEffect(() => {
        dispatch(getPlants());
    }, [currentId, dispatch]);

    useEffect(() => {
        console.log("plants", plants);
        updateList();
    }, [plants]);

    useEffect(() => {
        console.log('search changed', search);
        updateList();
    }, [search])

    function onSearchChange(value) {
        setSearch(value);
        // clearSearch()
    }

    function showForm() {
        setForm(true);
    }

    function submitPlant() {

        const name = search;

        const type = [
            'Fern',
            'Hoya',
            'Some dumbass tree'
        ]
        const rarity = [
            'Common',
            'Uncommon',
            'Rare',
            'Epic',
            'Legendary'
        ]


        const water = Math.floor(Math.random() * 4) + 1
        const sun = Math.floor(Math.random() * 4) + 1
        const price = Math.floor(Math.random() * 4) + 1


        const rarityIndex = (Math.floor(Math.random() * rarity.length) + 1) - 1;
        const typeIndex = (Math.floor(Math.random() * type.length) + 1) - 1;


        let postData = {
            name: name,
            rarity: rarity[rarityIndex],
            type: type[typeIndex],
            water: water,
            sun: sun,
            price: price,
        }

        if (currentId === 0) {


            dispatch(createPlant(postData));
        } else {
            dispatch(updatePlant(currentId, postData));
        }
    }

    function updateList() {
        let filter = [];
        console.log('plants', plants);

        if (search === '') {
            filter = plants;
        }
        else if (plants && plants.length > 0) {
            for (let i in plants) {
                console.log('plants[i]', plants[i]);
                const name = plants[i].name.toLowerCase();
                let index = name.indexOf(search.toLowerCase());
                if (index !== -1) {
                    filter.push(plants[i]);
                }
            }
        }

        setFiltered(filter);
    }

    const style = {
        // display: 'grid',
        // gridTemplateColumns: `repeat(3, 1fr)`,
        // maxWidth: (3 * (300 + 40)),

    }

    const cmpClasses = cx(
        'cmp-plants-list'
    )

    return (
        <div className={cmpClasses}>

            <Filters onSearchChange={onSearchChange} />

            <div className="search">

            </div>
            {filtered && filtered.length > 0 ?
                <div className="plants" style={style}>
                    {filtered.map((item, key) => {
                        return (
                            <PlantCard key={key} item={item} />
                        )
                    })}
                </div>
                :
                <div className="group center">
                    <p> No matching "{search}"</p>
                    {/* <Button variant="contained" onClick={props.handleModalOpen}> Add Plant</Button> */}
                    <Button variant="contained" onClick={showForm}> Add Plant</Button>

                </div>
            }
            {form ?
               <PlantForm name={search}/>
                : null}
        </div>
    )
}

function Filters({ clearSearch, ...props }) {

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState('');

    function toggleFilters() {
        setShow(!show);
    }

    function clearSearch() {
        setSearch('');
        if (props.onSearchChange) {
            props.onSearchChange('');
        }
    }
    function onSearchChange(event, value) {
        console.log('onSearchChange', event.target);
        setSearch(event.target.value);

        if (props.onSearchChange) {
            props.onSearchChange(event.target.value);
        }
    }


    const fitlersClass = cx(
        'filters',
        { active: show }
    )

    return (
        <div className="cmp-filters">

            <div className="inner">
                <Icon className="icon" onClick={toggleFilters}>
                    {show ?
                        <FaChevronUp />
                        :
                        <FaChevronDown />
                    }
                </Icon>
                <Input value={search} onChange={onSearchChange} placeholder="search..." />
                <Icon className="delete" onClick={clearSearch}>
                    {search.length > 0 ?
                        <FaTimes />
                        :
                        <> </>
                    }
                </Icon>
            </div>
            <div className={fitlersClass}>
                <p> stuff and things </p>
                <p> stuff and things </p>
                <p> stuff and things </p>
                <p> stuff and things </p>
                <p> stuff and things </p>
                <p> stuff and things </p>
                <p> stuff and things </p>
                <p> stuff and things </p>

            </div>
        </div>
    )
}