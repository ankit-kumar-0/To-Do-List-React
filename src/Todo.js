import React, { useState } from "react";
import todo from "../src/img/icon.png";

function Todo() {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState([]);
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isEditTask, setIsEditTask] = useState(null);

  function addTask() {
    if (!task) {
      alert("Please Add your task");
    } else if (task && !toggleBtn) {
      setListData(
        listData.map((data) => {
          if (data.id === isEditTask) {
            return { ...data, name: task };
          }
          return data;
        })
      );
      setToggleBtn(true);
      setTask("");
      setIsEditTask(null);
    } else {
      const allTask = { id: new Date().getTime().toString(), name: task };
      setListData([...listData, allTask]);
      setTask("");
    }
  }

  function removeTask(ind) {
    const updatedListData = listData.filter((data) => {
      return ind !== data.id;
    });
    setListData(updatedListData);
  }

  function editTask(id) {
    let newEditTask = listData.find((data) => {
      return data.id === id;
    });
    setToggleBtn(false);
    setTask(newEditTask.name);
    setIsEditTask(id);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className="container">
        <div className="todo-app">
          <h2>
            To-Do List <img src={todo} alt="" />{" "}
          </h2>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="Add your task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            {toggleBtn ? (
              <button onClick={addTask}>Add</button>
            ) : (
              <button onClick={addTask}>Edit</button>
            )}
          </div>
          {listData.map((data) => {
            return (
              <>
                <p key={data.id}>
                  <div className="listData">
                    {data.name}
                    <i
                      class="bx bx-edit"
                      id="span1"
                      onClick={() => editTask(data.id)}
                    ></i>
                    <i
                      className="bx bx-x"
                      id="span"
                      onClick={() => removeTask(data.id)}
                    ></i>
                  </div>
                </p>
              </>
            );
          })}
          {listData.length >= 1 && (
            <button className="btn-position" onClick={removeAll}>
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
