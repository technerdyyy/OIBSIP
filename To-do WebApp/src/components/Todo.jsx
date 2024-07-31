/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
function Todo(props) {
  const [isUpdating, setUpdating] = useState(false);
  const [newText, setNewText] = useState("");

  function handleChange(event) {
    setNewText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.updateTask(props.id, newText);
    setUpdating("");
    setUpdating(false);
  }

  const updatingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          updating {props.name} :
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newText}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setUpdating(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleCompletedTask(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setUpdating(true)}>
          <FaEdit /> <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          <AiFillDelete /> <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="todo">{isUpdating ? updatingTemplate : viewTemplate}</li>
  );
}

export default Todo;
