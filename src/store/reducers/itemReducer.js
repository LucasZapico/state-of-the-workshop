import uuid from 'uuid/v1';
const initState = {};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('Add items', action.item);
      return state;
    case 'ADD_ITEM_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default itemReducer;
