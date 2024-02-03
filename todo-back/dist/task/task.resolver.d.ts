import { TaskService } from './task.service';
import { Task } from './models/task.model';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): Task[];
}
