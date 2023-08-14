import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/tasks";
import { Task } from "../interfaces/task.interface";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTaks] = useState<Task[]>([]);

  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTaks(data));
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
