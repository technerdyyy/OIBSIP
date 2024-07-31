/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() === "") {
      props.addTask("Please enter a task!");
      return;
    } else {
      props.addTask(name);
      setName("");
    }
  }
  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        placeholder="what do you want to do today?"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        <FaPlus />
      </button>
    </form>
  );
}

export default Form;
