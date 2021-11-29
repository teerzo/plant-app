// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter, FaSearch, FaFilter } from "react-icons/fa";
import cx from 'classnames';

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
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
        { name: 'Test', description: 'Test test test test' },
    ]);


    return (
        <>
            <Page title={"Plants"} type={null} className="plants">
                <div className="page-inner">
                    <Search />
                    <div className="page-padding">
                        <div className="flex" >
                            {plants.map((item, key) => {
                                return (
                                <>
                                    <PlantCard key={key} {...item} />
                                    {/* <div className="flex-space"> </div> */}
                                </>)
                            })}

                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}


function Search({ ...props }) {

    const [filters, setFilters] = useState(false);

    const filterClasses = cx(
        'filters',
        { 'show': filters }
    )

    function handleFiltersClick() {
        setFilters(!filters);
    }

    return (
        <>
            <div className="search">
                <div className="search-inner">
                    <Icon> <FaFilter onClick={handleFiltersClick} /> </Icon>

                    <div class="search-box">
                        {/* <div className="flex-grow"> </div> */}
                        {/* <label> SEARCH </label> */}
                        <input placeholder="Search...." />
                    </div>
                    <Icon> <FaSearch /> </Icon>
                    {/* <div className="divider"> </div> */}
                </div>
            </div>
            <div className={filterClasses}>
                <h3> Filters </h3>
            </div>
        </>
    )
}
