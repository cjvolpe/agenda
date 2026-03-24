// builtin

// external
import type {FastifyInstance} from "fastify";
import type {Task} from "../../frontend/src/library/types.ts";
import {mock} from "node:test";

// internal


export function setupRoutes(server: FastifyInstance) {
    server.get<{
        Querystring: { date?: string };
        Reply: any[] | { error: string };
    }>("/task", async (request, reply) => {
        const {date} = request.query;
        let query = server.supabase.from("task").select('*');
        if (date) {
            query = query.eq('due_date', date);
        }
        const {data, error} = await query;
        if (error) {
            return reply.status(500).send(error);
        }
        return data;
    });
    server.post<{
        Body: Task;
    }>("/task", async (request, reply) => {
        const {name, description, dueDate} = request.body;
        const {data, error} = await server.supabase.from("task").insert([{
            task_name: name,
            description: description,
            due_date: dueDate
        }]).select();

        if (error) {
            return reply.status(500).send(error);
        }
        return reply.status(201).send(data);
    });
}