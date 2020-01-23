import request from 'superagent';
export const ADD_ROOM = 'ADD_ROOM';
export const GET_ROOMS = 'GET_ROOMS';

const baseUrl = 'http://localhost:4000';

function AddRoomSuccess(room) {
  return {
    type: ADD_ROOM,
    payload: room
  };
}

export const addRoom = room => (dispatch, _getState) => {
  request
    .post(`${baseUrl}/room`)
    .send({ room })
    .then(response => {
      const action = AddRoomSuccess(response.body);
      console.log('action', action);
      dispatch(action);
    })
    .catch(console.error);
};

function getRoomsSuccess(rooms) {
  return {
    type: GET_ROOMS,
    payload: rooms
  };
}

export const getRooms = () => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/room`)
    .then(response => {
      const action = getRoomsSuccess(response.body);
      console.log('action get rooms', action);
      dispatch(action);
    })
    .catch(console.error);
};
