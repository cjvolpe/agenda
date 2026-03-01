import {useState} from "react";

export default function TaskForm() {
    const [Task, setTask] = useState(
        
    );
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({
            ...Task,
            [name]: value

        });
        console.log(Task);
    };


    return (
        <div>
            <form>
                <label>Enter the task name:
                    <input
                        type="text"
                        name="taskName"
                        value={Task.name}
                        placeholder="Type here"
                        onChange={handleChange}
                    />


                </label>

                <label>Describe the task:
                    <input
                        type="text"
                        name="taskDescription"
                        value={Task.description}
                        placeholder="Type here"
                        onChange={handleChange}
                    />


                </label>

                <label>When is this task due:
                    <input
                        type="text"
                        name="taskDueDate"
                        value={Task.description}
                        placeholder="Type here"
                        onChange={handleChange}
                    />


                </label>
            </form>
        </div>
    )
}