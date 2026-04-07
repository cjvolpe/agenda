import type {Handle, Process, Task} from "../../../frontend/src/library/types.js";

export class Database{
    private tasks: Task[] = [];

    async addTask(task: Task): Promise<Handle> {
        this.tasks.push(task);
        return {success: true};
    }

    async getTasksForDate(date: Date): Promise<Process<Handle[]>> {

        const tasksForDate: Task[] = this.tasks.filter(t=>t.dueDate === date);
        return {success: true, data: tasksForDate};
    }
}