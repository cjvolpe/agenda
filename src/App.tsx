import  './App.css'
import TaskForm from "./components/TaskForm.tsx";
import Task from "./components/Task.tsx";

function App() {


  return (
    <>
      <div className="tasks-tab">
      {/*  left side */}
          <TaskForm></TaskForm>
        <div className="Tasks">
          <Task></Task>
        </div>
      </div>

      <div className="CalendarProbably">
      {/*  right side */}
      </div>
    </>
  )
}

export default App
