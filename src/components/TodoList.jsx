import React, { useState } from "react";
import AddTodo from "./AddTodo";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: "123", text: "첫번째 할일", status: "active" },
    { id: "124", text: "두번째 할일", status: "active" },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>

      {/* AddTodo통해서 setTodo (useState) 정보 받아온다 */}
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
