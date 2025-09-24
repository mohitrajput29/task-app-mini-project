import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ id: uuidv4(), title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}
