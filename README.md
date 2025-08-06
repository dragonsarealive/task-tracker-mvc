# Task Tracker MVC

A complete Task Tracker web application built with **Vite + React + TypeScript** following MVC (Minimum Viable Code) principles and deployment-first methodology.

## 🚀 Live Demo

**Live Application**: [https://flawless-beam.surge.sh](https://flawless-beam.surge.sh)

## ✨ Features

- ✅ **Add Tasks** - Create tasks with title and description
- ✅ **Toggle Completion** - Mark tasks as complete/incomplete with visual feedback
- ✅ **Delete Tasks** - Remove tasks from the list
- ✅ **localStorage Persistence** - Tasks survive page refresh
- ✅ **Responsive UI** - Clean, modern interface that works on all devices
- ✅ **Form Validation** - Prevents empty task submission
- ✅ **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: CSS (responsive design)
- **Persistence**: localStorage (browser native)
- **Deployment**: Surge.sh

## 🏗️ Project Structure

```
src/
├── App.tsx           # Main component with state management
├── components/
│   ├── TaskList.tsx  # Maps over tasks array
│   ├── TaskItem.tsx  # Individual task display with actions
│   └── AddTask.tsx   # Form for creating new tasks
├── types/
│   └── Task.ts       # TypeScript interface definitions
├── utils/
│   └── localStorage.ts # localStorage utility functions
└── index.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dragonsarealive/task-tracker-mvc.git
   cd task-tracker-mvc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📱 Usage

1. **Add a Task**: Fill in the title and description, then click "Add Task"
2. **Complete a Task**: Click the "Mark Done" button to toggle completion
3. **Delete a Task**: Click the "Delete" button to remove a task
4. **Persistence**: Your tasks are automatically saved and will persist after page refresh

## 🏛️ Architecture

This project follows **MVC (Minimum Viable Code)** principles:

- **Simple State Management**: Uses React's `useState` for local state
- **Direct localStorage**: No abstraction layers, direct browser API calls
- **Functional Components**: Clean, modern React patterns
- **TypeScript Interfaces**: Proper type safety without over-engineering
- **Inline Styles**: Simple styling for immediate functionality

### Core Data Model

```typescript
interface Task {
  id: string;        // Timestamp-based unique identifier
  title: string;     // Task title (required)
  description: string; // Task description (required)
  completed: boolean;  // Completion status (default: false)
}
```

## 🧪 Development Process

This project was built using a **deployment-first methodology**:

1. ✅ **Phase 1**: Project setup and "Hello World" deployment
2. ✅ **Phase 2**: Core component structure and interfaces
3. ✅ **Phase 3**: State management and CRUD operations
4. ✅ **Phase 4**: Form validation and UI polish
5. ✅ **Phase 5**: localStorage persistence integration
6. ✅ **Phase 6**: Complete MVC testing and validation

Each phase was immediately deployed and tested in production to ensure reliability.

## 🌟 Key Features Explained

### localStorage Persistence
- Tasks are automatically saved to browser localStorage on every state change
- Data is loaded from localStorage when the app starts
- Includes error handling and data validation
- Graceful fallback to empty state if localStorage is unavailable

### Form Validation
- Submit button is disabled when required fields are empty
- Form clears automatically after successful submission
- Real-time validation feedback

### Responsive Design
- Mobile-first approach
- Clean, centered layout with proper spacing
- Consistent styling across all screen sizes

## 🚀 Deployment

The application is deployed using Surge.sh:

```bash
# Build the project
npm run build

# Deploy to Surge.sh
surge dist/
```

**Live URL**: [https://flawless-beam.surge.sh](https://flawless-beam.surge.sh)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

While this is a complete MVC implementation, potential enhancements could include:

- Custom React hooks (`useLocalStorage`, `useTaskManager`)
- Service layer architecture
- Advanced TypeScript patterns
- CSS-in-JS styling solutions
- Animation libraries
- User authentication
- Task categories and priorities
- Due dates and reminders
- Collaborative features

## 📊 Project Stats

- **Lines of Code**: ~400 lines
- **Components**: 4 React components
- **TypeScript Coverage**: 100%
- **Build Size**: ~191KB (gzipped: ~60KB)
- **Development Time**: Built following deployment-first methodology
- **Test Coverage**: End-to-end tested in production environment

---

**Built with ❤️ using React + TypeScript + Vite**