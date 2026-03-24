import {type NavigateFunction, useNavigate} from "react-router";
import {useState} from "react";
import TaskBox from "../components/TaskBox";
import "./Home.css"

export default function Home() {
    const navigate: NavigateFunction = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().split("T")[0]);
    const formatLocalHeader = (dateStr: string) => {
        const [year, month, day] = dateStr.split('-').map(Number);
        return new Date(year, month - 1, day).toDateString();
    };

    return (<>
        <div className="home">
            <div className="date">
                <form>
                    <label>Tasks for: { formatLocalHeader(currentDate)}</label>
                    <input
                        type="date"
                        onChange={(e) => setCurrentDate(e.target.value)}
                        value={currentDate}
                    />
                </form>

            </div>
            <TaskBox date={currentDate}/>
            <button onClick={() => navigate("/new")}>Add New Task</button>

        </div>
    </>);
}