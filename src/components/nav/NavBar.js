import React from "react";
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
        props.history.push('/')
    }

    return (
            <header>
              <h1 className="site-title">
                Candy Corner
              </h1>
              <nav>
                <ul className="container">
                    <li>
                        <Link className="nav-link" to="/products"> Products </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/employees"> Employees </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/locations"> Locations </Link>
                    </li>
                    <li>
                        <span className="nav-link" onClick={handleLogout}> Logout </span>
                    </li>
                </ul>
              </nav>
            </header>
          );
        };

export default NavBar