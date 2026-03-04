function Task({ task, onDelete, onToggle }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem',
        borderBottom: '1px solid #ddd',
        background: task.completed ? '#f0f0f0' : 'white'
      }}
    >
      <span
        onClick={() => onToggle(task.id)}
        style={{
          cursor: 'pointer',
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : 'black',
          flex: 1
        }}
      >
        {task.text}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: '#ff4d4d',
          color: 'white',
          border: 'none',
          padding: '0.4rem 0.8rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Eliminar
      </button>
    </li>
  );
}

export default Task;