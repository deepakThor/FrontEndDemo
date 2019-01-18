import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export  class Address extends Component {
  static propTypes = {};
  state = {
    country: 'country',
    state: '',
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="signup-address">
        <div className="form-horizontal">
          <h2>Address</h2>
          <hr />
          <br />
          <TextField
            className="inputs"
            id="outlined-simple-start-adornment"
            variant="outlined"
            label=" Street"
          />
        </div>
        <div>
          <TextField
            className="inputs"
            id="outlined-simple-start-adornment"
            variant="outlined"
            label=" City"
          />
        </div>
        <div>
          <TextField
            className="inputs"
            id="outlined-simple-start-adornment"
            variant="outlined"
            label=" Pincode"
          />
        </div>
        <div className="inputs">
         
          <Select
         
            className="se"
            label="Country"
            onChange={this.handleChange}
            value={this.state.country}
            inputProps={{
              name: 'country',
              id:'country'
            }}
          >
            <MenuItem value="afgan">Afganistan</MenuItem>
            <MenuItem value="albania">Albania</MenuItem>
            <MenuItem value="algeria">Algeria</MenuItem>
            <MenuItem value="algeria">Algeria</MenuItem>
            <MenuItem value="algeria">Algeria</MenuItem>
            <MenuItem value="algeria">Algeria</MenuItem>
          </Select>
        </div>
        <div className="inputs">
          <Select
            className="se"
            label="State"
            onChange={this.handleChange}
            value={this.state.state}
            inputProps={{
              name: 'state',
            }}
          > 
            <MenuItem value="andhra">Andhra Pradesh</MenuItem>
            <MenuItem value="arunachal">Arunachal Pradesh</MenuItem>
            <MenuItem value="assam">Assam</MenuItem>
            <MenuItem value="bihar">Bihar</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}
/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    signup: state.signup,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Address);
