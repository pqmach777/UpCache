import React from 'react';
import PropTypes from 'prop-types';

class Market extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        label: state.label,
    };
}


Market.propTypes = {
    
};

export default Market
