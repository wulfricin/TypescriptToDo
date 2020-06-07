import { ApplicationState } from '../../../types/ApplicationState';
export const userSlicer = {
  getUsername: (state: ApplicationState) => {
    return `${state.user.firstName} ${state.user.lastName}`;
  },
  getUserEmail: (state: ApplicationState) => {
    return state.user.email;
  },
};
