import './App.css';
import SetDate from './components/fecha';
import PomodoroTimer from './components/pomodoro';
import TaskList from './components/lista-tareas';

function App() {
  return (

    <div className="App">

      <div className='grid-container'>
          
        <header className='header'>
          
          <SetDate />
          
        </header>
          
        <aside className='navbar'>
          <PomodoroTimer />
        </aside>

        <main className='main'>
          <div className='tarea-container'>
            <TaskList />
            
          </div>
        </main> 
        
      </div>
            
    </div>
  );
}

export default App;
