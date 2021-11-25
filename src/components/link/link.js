// Packages
import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import cx from 'classnames';
// Helpers
import useWindowSize from '../../helpers/useWindowSize';
// Styles
import './link.scss';


export default function RouteLink({ to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const classes = cx(
    'link',
    props.className,
    // { 'selected': location.pathname === to }
  );

  return (
    <>
      <div className={classes}>
        <Link to={to}> {props.children} </Link>
      </div>
    </>
  );
}