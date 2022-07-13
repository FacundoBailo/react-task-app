import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactStateComponent from './components/container/contact_state';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente de listado de tareas*/}
        <TaskListComponent></TaskListComponent>
        {/*Componente de repaso de sesiones 1, 2 y 3 */}
        <ContactStateComponent></ContactStateComponent>
      </header>
    </div>
  );
}

export default App;
