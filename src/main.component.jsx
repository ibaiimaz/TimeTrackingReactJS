import React, {Component} from 'react';

import NavTabs from './nav-tabs.component.jsx'

class Main extends Component {
    render(){
        return(
            <div>
                <NavTabs />
                <div className="container">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        );
    }
}

export default Main
