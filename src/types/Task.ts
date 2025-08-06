// Task interface definition
export interface Task {
  id: string;        // UUID or timestamp-based
  title: string;     // Required
  description: string; // Required  
  completed: boolean;  // Default false
}