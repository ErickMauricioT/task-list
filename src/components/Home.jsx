import { useNavigate } from "react-router-dom";

const Home = () => {
 const navigate = useNavigate();

 return (
  <div className="home">
   <h1>Bem-vindo à Lista de Tarefas!</h1>
   <p>Gerencie suas tarefas de forma simples e eficiente.</p>
   <button onClick={() => navigate("/tasks")}>Ir para Lista de Tarefas</button>
  </div>
 );
};

export default Home;