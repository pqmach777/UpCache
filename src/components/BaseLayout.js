import React from 'react';
import MainAppBar from './AppBar'

class BaseLayout extends React.Component {

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