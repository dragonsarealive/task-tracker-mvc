import { useState } from 'react';

interface AddTaskProps {
  onAddTask: (title: string, description: string) => void;
}

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() && description.trim()) {
      onAddTask(title.trim(), description.trim());
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2 style={{ margin: '0 0 15px 0', color: '#333' }}>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '3px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <textarea
            placeholder="Task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '3px',
              fontSize: '14px',
              minHeight: '80px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
          disabled={!title.trim() || !description.trim()}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;