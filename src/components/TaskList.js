import React from "react";

export default function TaskList({ tasks, deleteTask, toggleComplete }) {
  if (!tasks.length) return <p>No tasks added yet</p>;
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map(task => (
        <li key={task.id} style={{ margin: "10px 0", display: "flex", justifyContent: "space-between" }}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => toggleComplete(task.id)}>
            {task.title}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
