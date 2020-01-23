export default function(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_ROOM':
      return action.payload;
    case 'GET_ROOMS':
      return [...state, action.payload];
    case 'READ_ROOM':
      return action.payload;
    default:
      return state;
  }
}
