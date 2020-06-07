import { getUser } from '../../services/userService';
const promiseActions = {
  getUser: '[USER] GET',
}
export const actionTypes = {
  getUser: promiseActions.getUser,
  getUserPending: `${promiseActions}_PENDING`,
  getUserRejected: `${promiseActions}_REJECTED`,
  getUserFulfilled: `${promiseActions}_FULFILLED`,
};

export const getUserById = (id: string) => {
  return {
    type: actionTypes.getUser,
    payload: getUser(id),
  };
};
