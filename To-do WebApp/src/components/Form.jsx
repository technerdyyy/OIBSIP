/* eslint-disable react/prop-types */
import { TbAlertTriangleFilled } from "react-icons/tb";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
function Form(props) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Please enter a task!");
      return;
    } else {
      props.addTask(name);
      setName("");
      setError(null);
    }
  }
  function handleChange(event) {
    setName(event.target.value);
    setError(null);
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
      {error && (
        <div style={{ color: "red" }} className="warning-msg">
          <TbAlertTriangleFilled className="warning" />
          {error}
        </div>
      )}
      <button type="submit" className="btn btn__primary btn__lg">
        <FaPlus />
      </button>
    </form>
  );
}

export default Form;
