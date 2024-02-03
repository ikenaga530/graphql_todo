export declare enum Status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "DONE"
}
export declare class Task {
    id: number;
    name: string;
    dueDate: string;
    status: Status;
    description?: string;
}
