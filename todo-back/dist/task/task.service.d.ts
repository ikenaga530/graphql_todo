import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
import { UpdateTaskInput } from './dto/updateTask.input';
export declare class TaskService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getTasks(userId: number): Promise<Task[]>;
    createTask(createTaskInput: CreateTaskInput): Promise<Task>;
    updateTask(updateTaskInput: UpdateTaskInput): Promise<Task>;
    deleteTask(id: number): Promise<Task>;
}
