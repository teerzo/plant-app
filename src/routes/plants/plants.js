// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter, FaSearch, FaFilter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';
import Icon from 'components/icon';
import PlantCard from 'components/plant-card';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

// Styles
import './plants.scss';

export default function Plants({ ...props }) {

    const [plants, setPlants] = useState([
        {
            name: 'Test',
            description: 'Test test test test'
        },
        {
            name: 'Test',
            description: 'Test test test test'
        },
        {
            name: 'Test',
            description: 'Test test test test'
        },
        {
            name: 'Test',
            description: 'Test test test test'
        },
        {
            name: 'Test',
            description: 'Test test test test'
        }
    ]);


    return (
        <>
            <Page title={"Plants"} type={null} className="plants">
                <Search />
                <div className="page-padding">

                    <div className="flex" >
                        {plants.map((item, key) => {
                            return (<PlantCard key={key} {...item} />)
                        })}

                    </div>
                </div>
            </Page>
        </>
    );
}


function Search({ ...props }) {

    return (
        <div className="search">
            <label> SEARCH </label>
            <div class="search-box">
                <input />
            </div>
            <Icon> <FaSearch /> </Icon>
            <div className="divider"> </div>
            <Icon> <FaFilter /> </Icon>
        </div>
    )
}
