// Packages
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";

// Components
import Page from 'components/page';
import Link from 'components/link';

// Auth
import { AuthProvider, useAuth } from 'auth/auth';

export default function Plants({ ...props }) {
    return (
        <>
            <Page title={"Plants"} type={null}>
                <div className="page-padding">
                    {/* <AuthStatus /> */}

                    <h1 className="center"> Plants </h1>

                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo vel euismod tempus. Curabitur urna tortor, commodo ut finibus id, aliquam non tortor. Pellentesque maximus, nulla eu feugiat sagittis, diam ex viverra sapien, in faucibus lacus risus vitae ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed iaculis pretium nulla, eu auctor felis. Vestibulum sit amet massa et arcu rhoncus porta nec id enim. Maecenas iaculis est eget nibh pharetra aliquam. Duis eleifend ligula at nulla pretium rutrum. Praesent dignissim, sapien non euismod aliquam, nunc nisl faucibus odio, quis posuere mi est eget ante. Proin varius rutrum egestas. In condimentum est ut sodales ultrices. </p>
                </div>
                {/* <div className="home page-padding page-layout-centered">
                    <div className="flex-vertical">
                        <div className="flex-horizontal">
                            <OutLink href={"https://github.com/teerzo"}>
                                <FaGithub className="icon" />
                            </OutLink>
                            <OutLink href={"https://twitter.com/teerzo"}>
                                <FaTwitter className="icon" />
                            </OutLink>
                        </div>
                    </div>
                </div> */}
            </Page>
        </>
    );
}

function AuthStatus() {
    let auth = useAuth();
    let navigate = useNavigate();

    if (!auth.user) {
        return <p>You are not logged in.</p>;
    }

    return (
        <p>
            Welcome {auth.user}!{" "}
            <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
        </button>
        </p>
    );
}
