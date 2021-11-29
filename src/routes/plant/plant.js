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
import './plant.scss';

export default function Plant({ ...props }) {

    const [plant, setPlant] = useState({ name: 'Test', description: 'Test test test test' });


    return (
        <>
            <Page title={"Plant"} type={null} className="plant">
                <div className="page-inner">
                    <div className="page-padding">
                        <div className="flex">
                            <PlantCard {...plant} />
                        </div>
                        <div className="grid col2 row2 gap">
                            <Section title={"Description"} >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices.
                            </Section>
                        </div>
                    </div>
                </div>
            </Page>
        </>
    );
}

function Section({ title, ...props }) {

    return (
        <div className="section">
            <div className="title"> {title} </div>
            <div className="inner">
                {props.children}
            </div>
        </div>
    )
}