import React from 'react';
import PropTypes from 'prop-types';
import actionLabelResults from '../actions/actionLabelResults';
import { Grid } from "@material-ui/core";
import { connect } from 'react-redux';

class Labels extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    
    return (  
      <div> 
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <img src={this.props.image.link} style={{ width: '100%' }} alt="" id="labelImage"></img>
          </Grid>
        </Grid>
        {this.props.labels.map(label => {
        console.log(label)
        return <Grid container spacing={0} key={label.name} id='labelContainer'>
          <Grid item xs={6} className="labelCol" id='labelLeftCol'>
            Label: {label.name}
          </Grid>
          <Grid item xs={6} className="labelCol">
            Probability: {label.value}
          </Grid>
        </Grid> 
        })}
       
      </div>  
    );
  }
}
function mapStateToProps(state) {
    return {
        image: state.image,
        labels: state.labels,
    };
}
function mapDispatchToProps(dispatch) {
  return {
      generalLabelResults: (image, labels) => dispatch(actionLabelResults(image, labels))
  }
}
Labels.propTypes = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Labels)
