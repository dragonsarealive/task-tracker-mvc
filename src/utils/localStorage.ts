// localStorage utility functions
import type { Task } from '../types/Task';

const STORAGE_KEY = 'task-tracker-tasks';

// Save tasks to localStorage with error handling
export const saveTasks = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Failed to save tasks to localStorage:', error);
  }
};

// Load tasks from localStorage with data validation
export const loadTasks = (): Task[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Basic validation that it's an array
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error('Failed to load tasks from localStorage:', error);
  }
  return [];
};