import React from "react";
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push('/')
    }
}