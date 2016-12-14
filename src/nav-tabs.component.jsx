import React from 'react';
import { Link } from 'react-router';
import Tab from './tab.component.jsx';


const NavTab = () => {
  return (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand" to="/">Time tracking</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <Tab to="/" onlyActiveOnIndex >Home</Tab>
                    <Tab to="/activity/4">Activity</Tab>
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default NavTab;
