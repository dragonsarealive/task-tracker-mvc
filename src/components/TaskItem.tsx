import type { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem = ({ task, onToggle, onDelete }: TaskItemProps) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: task.completed ? '#f9f9f9' : '#fff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            margin: '0 0 10px 0',
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? '#666' : '#333'
          }}>
            {task.title}
          </h3>
          <p style={{
            margin: '0',
            color: task.completed ? '#888' : '#666',
            fontSize: '14px'
          }}>
            {task.description}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginLeft: '15px' }}>
          <button
            onClick={() => onToggle(task.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: task.completed ? '#28a745' : '#ffc107',
              color: task.completed ? 'white' : '#333',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            {task.completed ? 'Completed' : 'Mark Done'}
          </button>
          <button
            onClick={() => onDelete(task.id)}
            style={{
              padding: '5px 10px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;