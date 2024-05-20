import {ADD} from '../../login/constant';

export type ADD = {
  type: typeof ADD;
  // payload: Partial<{login: never}>;
};

export type LoginActionType = ADD;
export default LoginActionType;
