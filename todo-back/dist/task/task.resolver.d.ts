import { TaskService } from './task.service';
import { Task } from './models/task.model';
import { CreateTaskInput } from './dto/createTask.input';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): Task[];
    createTask(createTaskInput: CreateTaskInput): Task;
}
