import {  useRef } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function AddToDo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value='';
    dueDateElement.current.value='';
    onNewItem(todoName, dueDate);
   
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDo Here"
          
          />
        </div>
        <div className="col-4">
          <input type="date"  ref={dueDateElement}  />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
