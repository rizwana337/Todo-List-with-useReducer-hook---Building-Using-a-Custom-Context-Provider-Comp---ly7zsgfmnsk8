import React from "react";

const Todo = ({ todo, dispatch }) => {
  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };

  return (
    <div className="todo">
      <div className="todo-title">{todo.title}</div>
      <button className="todo-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export { Todo };


// import React from 'react';
// const Todo = () => {
//     return (
//         <></>
//     )
// }


// export { Todo }

