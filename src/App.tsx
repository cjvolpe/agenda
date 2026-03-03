import  './App.css'
import TaskForm from "./components/TaskForm.tsx";
import TaskElement from "./components/TaskElement.tsx";

function App() {


  return (
    <>
      <div className="tasks-tab">
      {/*  left side */}
         <TaskForm />
        <div className="Tasks">
          <TaskElement />
        </div>
      </div>

      <div className="CalendarProbably">
      {/*  right side */}
      </div>
    </>
  )
}

export default App
