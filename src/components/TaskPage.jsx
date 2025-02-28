import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskPage = () => {
 const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
 });

 useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
 }, [tasks]);

 const addTask = (title, description) => {
  const newTask = { id: Date.now(), title, description, completed: false };
  setTasks([...tasks, newTask]);
 };

 const toggleComplete = (id) => {
  setTasks(
   tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
   )
  );
 };

 const removeTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
 };

 return (
  <div className="app">
   <h1>Lista de Tarefas</h1>
   <TaskForm addTask={addTask} />
   <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
  </div>
 );
};

export default TaskPage;
