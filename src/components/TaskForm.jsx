import { useState } from "react";

const TaskForm = ({ addTask }) => {
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!title.trim() || !description.trim()) return; // Validação

  addTask(title, description);
  setTitle("");
  setDescription("");
 };

 return (
  <form onSubmit={handleSubmit} className="task-form">
   <input
    type="text"
    placeholder="Título"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    required
   />
   <textarea
    placeholder="Descrição"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    required
   />
   <button type="submit">Adicionar Tarefa</button>
  </form>
 );
};

export default TaskForm;
