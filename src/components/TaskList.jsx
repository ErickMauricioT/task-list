import { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleComplete, removeTask }) => {
 const [filter, setFilter] = useState("todas");

 const filteredTasks = tasks.filter((task) => {
  if (filter === "concluidas") return task.completed;
  if (filter === "pendentes") return !task.completed;
  return true;
 });

 return (
  <div className="task-list">
   <div className="filters">
    <button onClick={() => setFilter("todas")}>Todas</button>
    <button onClick={() => setFilter("pendentes")}>Pendentes</button>
    <button onClick={() => setFilter("concluidas")}>Concluídas</button>
   </div>
   {filteredTasks.length > 0 ? (
    filteredTasks.map((task) => (
     <Task
      key={task.id}
      task={task}
      toggleComplete={toggleComplete}
      removeTask={removeTask}
     />
    ))
   ) : (
     <strong>
      <p>Não há tarefas para exibir.</p>
   </strong>
    
   )}
  </div>
 );
};

export default TaskList;
