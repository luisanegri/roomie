import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRooms } from '../actions/room';
import Listing from './Listing';

export class ListingContainer extends Component {
  componentDidMount() {
    this.props.getRooms();
  }

  render() {
    return (
      <div>
        <Listing rooms={this.props.rooms} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    rooms: state.rooms
  };
};

const mapDispatchToProps = {
  getRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer);
