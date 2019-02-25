import React from 'react';
import MainAppBar from './AppBar'

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <MainAppBar />
                {this.props.children}
            </div>
        );
    }
}


export default BaseLayout