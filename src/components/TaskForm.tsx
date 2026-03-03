import type {Task} from '../library/types.ts'
import '../App.css'

export default function TaskForm() {
    const addTaskAction = (formData: FormData) => {

        const newTask: Task = {
            name: formData.get('taskName') as string,
            description: formData.get('taskDescription') as string,
            dueDate: formData.get('taskDueDate') as Date,
        };
        console.log(newTask);
    };


    return (
        <div className={"tasks-form"}>
            <form action={addTaskAction}>
                <label>Enter the task name:
                    <br />
                    <input
                        type="text"
                        name="taskName"
                        placeholder="Type here"

                    />
                </label>
                <br />

                <label>Describe the task:
                    <br />
                    <textarea
                        type="text"
                        name="taskDescription"
                        placeholder="Type here"

                    />
                </label>
                <br />

                <label>When is this task due:
                    <br />
                    <input
                        type="date"
                        name="taskDueDate"
                        placeholder="Type here"

                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

