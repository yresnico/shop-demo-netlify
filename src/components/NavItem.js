import {LinkContainer} from 'react-router-bootstrap';
import {Nav} from 'react-bootstrap';
import React from 'react';
function MyNavItem(props) {
    return (
        <LinkContainer to={props.path}>
            <Nav.Link>{props.title}</Nav.Link>
        </LinkContainer>
    )
}

export default MyNavItem;