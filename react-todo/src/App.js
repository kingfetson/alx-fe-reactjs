import React from "react";
import TodoList from "./components/TodoList";  // ✅ import TodoList

function App() {
  return (
    <div className="App">
      <h1>My React Todo App</h1>
      <TodoList />  {/* ✅ render TodoList */}
    </div>
  );
}

export default App;
