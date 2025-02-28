const Task = ({ task, toggleComplete, removeTask }) => {
 return (
  <div className={`task ${task.completed ? "completed" : ""}`}>
   <div className="task-content">
    <h3>{task.title}</h3>
    <p>{task.description}</p>
   </div>
   <div className="task-actions">
    <button onClick={() => toggleComplete(task.id)}>
     {task.completed ? "Desmarcar" : "Concluir"}
    </button>
    <button onClick={() => removeTask(task.id)} className="delete-btn">
     Excluir
    </button>
   </div>
  </div>
 );
};

export default Task;
