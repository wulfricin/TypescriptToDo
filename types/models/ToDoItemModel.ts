import { prop } from '@typegoose/typegoose';
import { ToDoItem } from '../interfaces/ToDoItem';
export class ToDoItemSchema implements ToDoItem {
  @prop({ required: true }) description: string;
  @prop({ required: false }) finishedAt?: Date;
  @prop({ required: false, default: () => new Date() }) createdAt?: Date;
}
