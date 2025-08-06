import { useState, useEffect } from 'react';
import './App.css';
import type { Task } from './types/Task';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { saveTasks, loadTasks } from './utils/localStorage';

function App() {
  // Task array state management with localStorage persistence
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add task functionality
  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now().toString(), // Simple timestamp-based ID for MVC
      title,
      description,
      completed: false
    };
    setTasks(prev => [...prev, newTask]);
  };

  // Toggle task completion
  const handleToggleTask = (id: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task functionality
  const handleDeleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Task Tracker
      </h1>
      
      <AddTask onAddTask={handleAddTask} />
      <TaskList 
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  )
}

export default App