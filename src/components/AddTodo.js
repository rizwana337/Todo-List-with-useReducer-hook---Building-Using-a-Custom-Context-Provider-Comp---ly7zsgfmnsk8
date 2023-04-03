import React, { useState } from "react";

const AddTodo = ({ dispatch }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: {
        title,
        id: Date.now(),
      },
    });
    setTitle("");
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
      <input
        id="todo-input"
        type="text"
        placeholder="Enter a todo item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export { AddTodo };


// import React from "react"

// const AddTodo = ({ dispatch }) => {


//     return (
//         <></>
//     )
// }

// export { AddTodo }
