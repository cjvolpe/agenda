import {type NavigateFunction, useNavigate} from "react-router";
import {useState} from "react";
import "./Home.css"

export default function Home() {
    const navigate: NavigateFunction = useNavigate();
    const [currentDate, setCurrentDate] = useState(new Date());

    return (<>
        <div className="home">
            <div className="date">
                <form>
                    <label>Tasks for: {currentDate.toDateString()}</label>
                    <input
                        type="date"
                        onChange={() => setCurrentDate(currentDate)}
                        value={`${currentDate.getFullYear()}-${(currentDate.getMonth()+1).toString().padStart(2,"0")}-${currentDate.getDate()}`}
                    />
                </form>

            </div>
            <button onClick={() => navigate("/new")}>Add New Task</button>

        </div>
    </>);
}