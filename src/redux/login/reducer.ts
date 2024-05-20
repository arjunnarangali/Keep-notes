import {LoginState} from '../types/state/login';
import {ADD} from './constant';
import LoginActionType from '../types/actions/login';

const initialState: LoginState = {count: 0};

const loginReducer = (state = initialState, action: LoginActionType) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

export default loginReducer;
