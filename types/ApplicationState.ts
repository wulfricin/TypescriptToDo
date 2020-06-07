import { User } from './interfaces/User';

export interface ApplicationState {
  user: UserState;
}

export interface UserState extends Omit<User, 'toDoItems'> {}
