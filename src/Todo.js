import React, { useState } from "react";
import todo from "../src/img/icon.png";

function Todo() {
  const [task, setTask] = useState("");
  const [listData, setListData] = useState([]);

  function addTask() {
    if (!task) {
    } else {
      setListData([...listData, task]);
      setTask("");
    }
  }

  function removeTask(id) {
    const updatedListData = listData.filter((elem, ind) => {
      return ind !== id;
    });
    setListData(updatedListData);
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
            <button onClick={addTask}>Add</button>
          </div>
          {listData.map((data, ind) => {
            return (
              <>
                <p key={ind}>
                  <div className="listData">
                    {data}
                    <i
                      className="bx bx-x"
                      id="span"
                      onClick={() => removeTask(ind)}
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
