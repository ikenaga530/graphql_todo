import { TaskService } from './task.service';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';
export declare class TaskResolver {
    private readonly taskService;
    constructor(taskService: TaskService);
    getTasks(userId: number): Promise<Task[]>;
    createTask(createTaskInput: CreateTaskInput): Promise<Task>;
    updateTask(updateTaskInput: UpdateTaskInput): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
