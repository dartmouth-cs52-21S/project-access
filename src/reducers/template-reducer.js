import { ActionTypes } from '../actions';

const initialState = {
  current: {},
};

const TemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_PORTFOLIO:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default TemplateReducer;
