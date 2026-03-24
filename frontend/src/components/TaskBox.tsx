import {useState,useEffect} from 'react';
import type {Task} from '../library/types.ts';
import './task.css'

export default function TaskBox({date}:{date: string}) {
    const [tasks, setTasks] = useState<any[]>([]);
    const fetchTaskByDate = async (targetDate: string) => {
        console.log(date);
        try{
            const response = await fetch(`http://localhost:8000/task?date=${targetDate}`);
            const data = await response.json();
            setTasks(data);
        }
        catch(error){
            console.log("Failed to fetch tasks: ",error);
        }

    };

    useEffect(() => {
        if(date){
            fetchTaskByDate(date);
        }
    }, [date]);
    return (
        <div className="task-box">
            <ul>
                {Array.isArray(tasks) && tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.task_name}</strong>: {task.description}
                    </li>
                ))}
            </ul>
            {tasks.length === 0 && <p>No tasks found for this date.</p>}
        </div>
    );
}