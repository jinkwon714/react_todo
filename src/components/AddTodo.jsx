import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: "모릅니다", text, status: "active" });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="add todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
