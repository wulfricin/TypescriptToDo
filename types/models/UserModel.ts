import { modelOptions, prop } from '@typegoose/typegoose';
import { User } from '../interfaces/User';
import { ModelBuilder } from './ModelBuilder';
import { ToDoItemSchema } from './ToDoItemModel';
@modelOptions({
  schemaOptions: {
    collection: 'users',
    id: false,
    skipVersioning: true,
  },
})
export class UserSchema implements User {
  @prop({ required: true }) firstName: string;
  @prop({ required: true }) lastName: string;
  @prop({ required: true }) email: string;
  @prop({ required: false, default: [] }) toDoItems: ToDoItemSchema[];
}

export const UserModel = () => ModelBuilder.build(UserSchema);
