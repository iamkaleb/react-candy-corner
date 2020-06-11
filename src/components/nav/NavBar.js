import React from "react";
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    
    const handleLogout = () => {
        props.clearUser();
    }

    return (
            <header>
              <nav>
                <ul className="container">
                    <li>
                        <Link className="nav-link" to="/"> Products </Link>
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