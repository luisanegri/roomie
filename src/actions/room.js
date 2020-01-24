import request from 'superagent';
export const ADD_ROOM = 'ADD_ROOM';
export const GET_ROOMS = 'GET_ROOMS';
export const GET_ROOM = 'GET_ROOM';

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

export const getRoomSuccess = room => ({
  type: GET_ROOM,
  payload: room
});

export const getRoom = id => (dispatch, _getState) => {
  console.log('id', id);
  request
    .get(`${baseUrl}/room/${id}`)
    .then(response => {
      const action = getRoomSuccess(response.body);
      console.log('action');
      dispatch(action);
    })
    .catch(console.error);
};
