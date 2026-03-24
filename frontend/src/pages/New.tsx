import './New.css'
import TaskForm from "../components/TaskForm.tsx";
import {type NavigateFunction, useNavigate} from "react-router";

function New() {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <div className="tasks-tab">
                {/*  left side */}
                <TaskForm/>
                <div className="Tasks">
                </div>
                <button onClick={() => navigate("/")}>Back</button>

            </div>


        </>
    )
}

export default New
