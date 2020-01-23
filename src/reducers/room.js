export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_ROOM':
      return action.payload;
    case 'READ_ROOMS':
      return [...state, action.payload];
    case 'READ_ROOM':
      return action.payload;
    default:
      return state;
  }
}
