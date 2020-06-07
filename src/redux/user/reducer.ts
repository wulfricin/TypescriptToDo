import { UserState } from '../../../types/ApplicationState';
import { actionTypes } from './action';
export const initialUserState: UserState = {
  firstName: 'Wulf',
  email: 'wulf@tester.com',
  lastName: 'Man',
};

export const userStateReducer = (
  state = initialUserState,
  action,
): UserState => {
  switch (action.type) {
    case actionTypes.getUserFulfilled: {

      return {
        ...state,
        ...action.payload
      };
    }
    case actionTypes.getUserRejected: {

      return {
        firstName: '',
        lastName: '',
        email: '',
      };
    }
    default:
      return state;
  }
};
