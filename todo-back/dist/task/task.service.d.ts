import { CreateTaskInput } from './dto/createTask.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';
export declare class TaskService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getTasks(): Promise<Task[]>;
    createTask(createTaskInput: CreateTaskInput): Promise<Task>;
}
