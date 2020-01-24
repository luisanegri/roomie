import React, { Component } from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import { getRoom } from '../actions/room';

export class RoomContainer extends Component {
  componentDidMount() {
    this.props.getRoom(this.props.match.params.roomId);
  }
  render() {
    return (
      <div>
        <Room room={this.props.room} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  room: state.room
});

const mapDispatchToProps = { getRoom };

export default connect(mapStateToProps, mapDispatchToProps)(RoomContainer);
