import React from 'react';
import PropTypes from 'prop-types';
import actionLabelResults from '../actions/actionLabelResults';
import { Grid } from "@material-ui/core";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import findLabel from '../actions/findLabel'

class Labels extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      findLabel: ''
    }
    this.handleSubmitLabels = this.handleSubmitLabels.bind(this)
  }

  // handleStoreLables(label){
  //   var newStateArray = this.state.storeLabels.slice();
  //   newStateArray.push(label);
  //   this.setState({storeLabels: newStateArray});
  // }
  handleSubmitLabels(){
      this.props.eventFindingLabels(this.state.findLabel)
      console.log(this.state.findLabel)

  }

  render() {
    
    return (  
      <div> 
        <Grid container spacing={0}>
          <Grid item xs={12} key={this.props.image.type}>
            <img src={this.props.image.link} style={{ width: '100%' }} alt="" id="labelImage"></img>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} id='labelContainer'>
            {this.props.labels.map(label => {
              console.log(label)
              return <Grid container spacing={0} key={label.name}>
                <Grid item xs={4} className="labelCol" id='labelLeftCol'>
                  Label: {label.name}
                </Grid>
                <Grid item xs={4} className="labelCol" id='labelMidCol'>
                  Probability: {label.value}
                </Grid>
                <Grid item xs={4} className="labelCol">
                  <Button  onClick={() => this.setState({ findLabel: label.name}, this.handleSubmitLabels)}>Find in Store</Button>
                </Grid>
              </Grid> 
            })}
          </Grid>
        </Grid>

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
      generalLabelResults: (image, labels) => dispatch(actionLabelResults(image, labels)),
      eventFindingLabels: (label) => dispatch(findLabel(label))
  }
}
Labels.propTypes = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Labels)
