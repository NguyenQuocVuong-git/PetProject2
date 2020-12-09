import React from "react";
import ListTodo from "../component/ListTodo/index";
import AddTodo from "../component/AddTodo/index";
import "./Homepage.css";


function HomePages() {
  return (
    <div className="main-content">
        <h2 className="header">TODO APP</h2>
      <ListTodo />
      <AddTodo />
    </div>
  );
}

export default HomePages;
