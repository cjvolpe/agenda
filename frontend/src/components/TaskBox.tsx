import {useState, useEffect} from 'react';
import type {Task} from '../library/types.ts';
import './task.css'

export default function TaskBox({date}: { date: string }) {
    const [tasks, setTasks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchTaskByDate = async (targetDate: string) => {
        console.log(date);
        setLoading(true);

        const response = await fetch(`http://localhost:8000/task?date=${targetDate}`);
        const data = await response.json();
        if (data.success) {
            setTasks(data.data);
        } else {
            console.log("Failed to fetch tasks: ", data.error);
        }

        setLoading(false);
    }

    useEffect(() => {
        if (date) {
            fetchTaskByDate(date);
        }
    }, [date]);
    return (
        <div className="task-box">
            <ul>
                {!loading && Array.isArray(tasks) && tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.task_name}</strong>: {task.description}
                    </li>
                ))}
            </ul>
            {loading && <p>Loading...</p>}
            {tasks.length === 0 && !loading && <p>No tasks found for this date.</p>}
        </div>
    );
}