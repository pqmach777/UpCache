import React from 'react';
import PropTypes from 'prop-types';
const vision = require('@google-cloud/vision');
const client = new vision.ProductSearchClient();

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



Market.propTypes = {
    
};

export default Market
