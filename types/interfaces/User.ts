import { ToDoItem } from './ToDoItem';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  toDoItems: ToDoItem[];
}
