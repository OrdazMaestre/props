import { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(inputValue);
    setInputValue(''); // limpiar input después de añadir
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe una nueva tarea..."
        style={{ padding: '0.6rem', width: '70%', marginRight: '0.5rem' }}
      />
      <button type="submit" style={{ padding: '0.6rem 1rem' }}>
        Añadir
      </button>
    </form>
  );
}

export default AddTaskForm;