import React, { useState } from 'react';
import './App.css'; // Import the updated CSS styling

function App() {
  const [tasks, setTasks] = useState(['Sample Task 1', 'Sample Task 2']);
  const [newTask, setNewTask] = useState('');

  // Create and Read Task
  const handleAddTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask(''); 
    }
  };

  // Delete Task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="mainDiv">
      <h1>To-Do List</h1>
      <div className="taskInput">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <div className="taskList">
        {tasks.map((task, index) => (
          <div key={index} className="taskItem">
            <p>{task}</p>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
