import { useState } from "react";
import "./App.css";
import Logo from "../public/vite.svg";
import { Task } from "./interfaces/task.interface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

interface Props {
  title?: string;
}

function App({ title }: Props) {
  const [task, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React Hooks",
      completed: false,
    },
  ]);

  const getCurrentTimestap = (): number => new Date().getTime();

  const addTask = (newTask: Task) =>
    setTask([
      ...task,
      { id: getCurrentTimestap(), completed: false, ...newTask },
    ]);

    const deleteTask = (id: number) => {
      setTask(task.filter((task) => task.id !== id));
    }
  return (
    <div className="bg-dark text-white" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <img src={Logo} alt="Vite Logo" />
          <a href="/" className="navbar-brand">
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm addTask={addTask}/>
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={task} deleteTask={deleteTask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
