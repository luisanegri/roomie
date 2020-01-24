import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListingForm from './ListingForm';
import { addRoom } from '../../actions/room.js';

export class ListingFormContainer extends Component {
  state = {
    description: '',
    image: '',
    rent: '',
    deposit: '',
    bills: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addRoom(
      this.state.description,
      this.state.image,
      this.state.rent,
      this.state.deposit,
      this.state.bills
    );
    this.setState({
      description: '',
      image: '',
      rent: '',
      deposit: '',
      bills: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <ListingForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { addRoom };

export default connect(null, mapDispatchToProps)(ListingFormContainer);
