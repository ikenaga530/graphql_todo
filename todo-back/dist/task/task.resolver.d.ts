import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from '@prisma/client';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(): Promise<Task[]>;
    createTask(createTaskInput: CreateTaskInput): Promise<Task>;
}
