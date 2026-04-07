// builtin

// external
import type {FastifyInstance} from "fastify";
import type {BaseReply, Failure, ReplyConfig, Task} from "../../frontend/src/library/types.ts";
import type {Handle} from "../../frontend/src/library/types.ts"
import type {Process} from "../../frontend/src/library/types.ts";

// internal


export function setupRoutes(server: FastifyInstance) {
    server.get<{
        Querystring: { date?: string };
        Reply: any[] | { error: string };
    }>("/task", async (request, reply) => {
        const {reply: result, code} = await packageResponse(() => handleGetTasks(request.query.date));
        reply.status(code).send(result);

    });
    server.post<{
        Body: Task;
        Reply: BaseReply<void>;

    }>("/task", async (req, res) => {
        const {reply, code} = await packageResponse(() => handleNewTask(req.body));
        res.status(code).send(reply);
    });


    async function handleNewTask(req: Task): Promise<Handle> {
        const {name, description, dueDate} = req;
        const {data, error} = await server.supabase.from("task").insert([{
            task_name: name,
            description: description,
            due_date: dueDate
        }]).select();
        if (error) {
            return {success: false, error: error, code: 500};
        }
        return {success: true, data: data};
    }

    async function handleGetTasks(date?: string): Promise<Handle> {
        let query = server.supabase.from("task").select('*');
        if (date) {
            query = query.eq('due_date', date);
        }
        const {data, error} = await query;
        if (error) {
            return {success: false, error: error, code: 500};
        }
        return {success: true, data: data};
    }

    async function packageResponse<O>(handler: () => Promise<Process<O>>,): Promise<ReplyConfig<O>> {
        const result = await handler();

        if (result.success) {
            return {
                reply: {...result},
                code: 200
            };
        }

        if (result.code !== undefined) {
            return {
                reply: {
                    success: false,
                    error: result.error.message,
                    message: result.error.message,
                },
                code: result.code
            };
        }

        throw result.error;

    }
}
