"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_model_1 = require("./models/task.model");
const task_model_2 = require("./models/task.model");
let TaskService = class TaskService {
    constructor() {
        this.tasks = [];
    }
    getTasks() {
        const task1 = new task_model_1.Task();
        task1.id = 1;
        task1.name = 'task1';
        task1.dueDate = '2024-02-03';
        task1.status = task_model_2.Status.PENDING;
        this.tasks.push(task1);
        return this.tasks;
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)()
], TaskService);
//# sourceMappingURL=task.service.js.map