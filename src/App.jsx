import './App.css'
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import Task from './components/Task.jsx';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (newText) => {
    if (!newText.trim()) return; // no añadir tareas vacías

    const newTask = {
      id: tasks.length + 1,          // id simple
      text: newText,
      completed: false
    };

    setTasks([...tasks, newTask]);   // mantener las anteriores
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <h1>Lista de Tareas</h1>

      <AddTaskForm onAddTask={addTask} />

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}                   
            onDelete={deleteTask}
            onToggle={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
