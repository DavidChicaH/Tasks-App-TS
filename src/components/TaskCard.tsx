import { Task } from "../interfaces/task.interface";

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskCard = ({ task, deleteTask }: Props) => {
  return (
    <>
      <div
        key={task.id}
        className="card card-body bg-secondary rounded-50 text-dark"
      >
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button
          className="btn btn-danger "
          onClick={() => task.id && deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TaskCard;
