// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';
import Image from 'components/image';
import AuthStatus from 'components/auth-status';
// Auth
import { AuthProvider, useAuth } from 'auth/auth';

import monsteraImg from 'images/monstera-full.png';

import './home.scss';

export default function Home({ ...props }) {
    return (
        <>
            <Page title={"Home"} type={null}>
                <div className="page-padding">
                    <AuthStatus />
                    <div className="center">
                        <h1 className="center"> Coming soon... </h1>
                        <Image src={monsteraImg} styles={{ "maxWidth": '300px' }} />
                    </div>
                    <div className="grid col2 row2 gap">
                        <Section title={"News"} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices.
                        </Section>
                        <Section title={"Recent changes"} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices.
                        </Section>
                        <Section title={"New additions"} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices.
                        </Section>
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