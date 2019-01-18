import React,{Component} from 'react';
import reducer from './../store/reducers';
import withReducer from 'store/withReducer';
import {withStyles, Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography} from '@material-ui/core';


class BasicInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
        <div>

        <TextField
            className="mt-8 mb-16"
            error={this.props.form.name === ''}
            required
            label="Name"
            autoFocus
            id="name"
            name="name"
            value={this.props.form.name}
            onChange={this.props.basicInfoData}
            variant="outlined"
            fullWidth
        />

        <TextField
            className="mt-8 mb-16"
            id="description"
            name="description"
            onChange={this.props.basicInfoData}
            label="Description"
            type="text"
            value={this.props.form.description}
            multiline
            rows={5}
            variant="outlined"
            fullWidth
        />
        <TextField
            className="mt-8 mb-16"
            id="itemname"
            name="itemname"
            onChange={this.props.basicInfoData}
            label="Item Name"
            type="text"
            value={this.props.form.itemname}
            multiline
            rows={5}
            variant="outlined"
            fullWidth
        />
        </div>
        )
    };
}
export default withReducer('eCommerceApp', reducer)(BasicInfo);