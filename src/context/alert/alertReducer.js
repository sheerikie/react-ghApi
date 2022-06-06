import * as ActionTypes from '../actionTypes';

const AlertReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_ALERT:
      return action.payload;

    case ActionTypes.REMOVE_ALERT:
      return null;

    default:
      return state;
  }
};

export default AlertReducer;
