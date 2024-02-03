"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const task_service_1 = require("./task.service");
const task_model_1 = require("./models/task.model");
const createTask_input_1 = require("./dto/createTask.input");
const updateTask_input_1 = require("./dto/updateTask.input");
let TaskResolver = class TaskResolver {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async getTasks() {
        return await this.taskService.getTasks();
    }
    async createTask(createTaskInput) {
        return await this.taskService.createTask(createTaskInput);
    }
    async updateTask(updateTaskInput) {
        return await this.taskService.updateTask(updateTaskInput);
    }
};
exports.TaskResolver = TaskResolver;
__decorate([
    (0, graphql_1.Query)(() => [task_model_1.Task], { nullable: 'items' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "getTasks", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_model_1.Task),
    __param(0, (0, graphql_1.Args)('createTaskInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTask_input_1.CreateTaskInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "createTask", null);
__decorate([
    (0, graphql_1.Mutation)(() => task_model_1.Task),
    __param(0, (0, graphql_1.Args)('updateTaskInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateTask_input_1.UpdateTaskInput]),
    __metadata("design:returntype", Promise)
], TaskResolver.prototype, "updateTask", null);
exports.TaskResolver = TaskResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskResolver);
//# sourceMappingURL=task.resolver.js.map