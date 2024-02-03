import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';
export declare class TaskService {
    tasks: Task[];
    getTasks(): Task[];
    createTask(createTaskInput: CreateTaskInput): Task;
}
