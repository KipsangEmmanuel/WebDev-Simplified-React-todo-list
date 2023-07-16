
import React, { useState } from 'react';
import { useEffect } from 'react';
import "./App.css";
import NewItemForm from './NewItemForm';
import TodoItem from './TodoItem';

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    return localValue ? JSON.parse(localValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos))
  }, [todos])

  function handleNewItem(e) {
    setNewItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setTodos(currentValue => [
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false }
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <>
      <NewItemForm
        newItem={newItem}
        handleNewItem={handleNewItem}
        handleSubmit={handleSubmit}
      />

      <h1 className='header'>TodoList</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';
// import "./App.css";
// import NewItemForm from './NewItemForm';
// import TodoItem from './TodoItem';

// const App = () => {
//   const [newItem, setNewItem] = useState("");
//   const [todos, setTodos] = useState(() => {
//     const localValue = localStorage.getItem("ITEMS");
//     return localValue ? JSON.parse(localValue) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("ITEMS", JSON.stringify(todos));
//   }, [todos]);

//   function handleNewItem(e) {
//     setNewItem(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     setTodos(currentValue => [
//       ...todos,
//       { id: crypto.randomUUID(), title: newItem, completed: false }
//     ]);
//     setNewItem(""); // Clear the input field after submitting
//   }

//   function toggleTodo(id, completed) {
//     setTodos(currentTodos => {
//       return currentTodos.map(todo => {
//         if (todo.id === id) {
//           return { ...todo, completed };
//         }
//         return todo;
//       });
//     });
//   }

//   function deleteTodo(id) {
//     setTodos(currentTodos => {
//       return currentTodos.filter(todo => todo.id !== id);
//     });
//   }

//   return (
//     <>
//       <NewItemForm
//         newItem={newItem}
//         handleNewItem={handleNewItem}
//         handleSubmit={handleSubmit}
//       />

//       <h1 className='header'>TodoList</h1>
//       <ul className='list'>
//         {todos.length === 0 && "No Todos"}
//         {todos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             toggleTodo={toggleTodo}
//             deleteTodo={deleteTodo}
//           />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;
