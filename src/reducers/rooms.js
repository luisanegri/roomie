export default function(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_ROOM':
      return action.payload;
    case 'GET_ROOMS':
      return action.payload;
    case 'GET_ROOM':
      return action.payload;
    default:
      return state;
  }
}
