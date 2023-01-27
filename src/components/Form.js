import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //   const inputRef = useRef(null);

  //   useEffect = () => {
  //     inputRef.current.focus();
  //   };

  const formChange = (event) => {
    setInput(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={formSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update task"
            value={input}
            onChange={formChange}
            name="text"
            className="todo-input update"
          />
          <button onClick={formSubmit} className="todo-button update">
            Update Todo
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a task"
            value={input}
            onChange={formChange}
            name="text"
            className="todo-input"
          />
          <button onClick={formSubmit} className="todo-button">
            Add task
          </button>
        </>
      )}
    </form>
  );
}

export default Form;
