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
exports.Task = exports.Status = void 0;
const graphql_1 = require("@nestjs/graphql");
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["IN_PROGRESS"] = "IN_PROGRESS";
    Status["DONE"] = "DONE";
})(Status || (exports.Status = Status = {}));
(0, graphql_1.registerEnumType)(Status, {
    name: 'Status',
});
let Task = class Task {
    static _GRAPHQL_METADATA_FACTORY() {
        return { name: { type: () => String }, dueDate: { type: () => String } };
    }
};
exports.Task = Task;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, {}),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Status, {}),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
exports.Task = Task = __decorate([
    (0, graphql_1.ObjectType)()
], Task);
//# sourceMappingURL=task.model.js.map