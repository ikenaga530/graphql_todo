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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TaskService = class TaskService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async getTasks(userId) {
        return await this.prismaService.task.findMany({
            where: { userId },
        });
    }
    async createTask(createTaskInput) {
        const { name, dueDate, description, userId } = createTaskInput;
        return await this.prismaService.task.create({
            data: {
                name,
                dueDate,
                description,
                userId,
            },
        });
    }
    async updateTask(updateTaskInput) {
        const { id, name, dueDate, status, description } = updateTaskInput;
        return await this.prismaService.task.update({
            where: { id },
            data: {
                name,
                dueDate,
                status,
                description,
            },
        });
    }
    async deleteTask(id) {
        return await this.prismaService.task.delete({
            where: { id },
        });
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskService);
//# sourceMappingURL=task.service.js.map