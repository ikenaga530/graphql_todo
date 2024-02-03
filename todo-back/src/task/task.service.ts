import { Injectable } from '@nestjs/common';
import { Task } from './models/task.model';
import { Status } from './models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    const task1 = new Task();
    task1.id = 1;
    task1.name = 'task1';
    task1.dueDate = '2024-02-03';
    task1.status = Status.PENDING;
    this.tasks.push(task1);
    return this.tasks;
  }
}