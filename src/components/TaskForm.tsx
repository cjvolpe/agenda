import {useState} from "react";
import type {Task} from '../library/types.ts'

export default function TaskForm() {
    const [task, setTask] = useState<Task>(
        
    );
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]: value

        });
        console.log(task);
    };


    return (
        <div>
            <form>
                <label>Enter the task name:
                    <input
                        type="text"
                        name="taskName"
                        value={task.name}
                        placeholder="Type here"
                        onChange={handleChange}
                    />


                </label>

                <label>Describe the task:
                    <input
                        type="text"
                        name="taskDescription"
                        value={task.description}
                        placeholder="Type here"
                        onChange={handleChange}
                    />


                </label>

                <label>When is this task due:
                    <input
                        type="text"
                        name="taskDueDate"
                        value={task.description}
                        placeholder="Type here"
                        onChange={handleChange}
                    />


                </label>
            </form>
        </div>
    )
}