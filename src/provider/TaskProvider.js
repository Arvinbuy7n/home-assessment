"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [editedId, setEditedId] = useState(null);
  const [dueDate, setDueDate] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [priority, setPriority] = useState("Low");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const storeTask = localStorage.getItem("tasks");
    if (storeTask) {
      setTasks(JSON.parse(storeTask));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDueChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleTaskAction = () => {
    if (inputVal.trim() === "" || dueDate.trim() === "") return;

    if (editedId) {
      setTasks(
        tasks.map((prevTask) =>
          prevTask.id === editedId
            ? { ...prevTask, inputVal, dueDate, priority }
            : prevTask
        )
      );
    } else {
      setTasks([
        ...tasks,
        { inputVal, id: new Date(), completed: false, dueDate, priority },
      ]);
    }
    setEditedId(null);
    setInputVal("");
    setDueDate("");
    setPriority("Low");
    setOpenModal(false);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const handleEdit = (id, currentValue) => {
    setEditedId(id);
    setInputVal(currentValue);
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        inputVal,
        editedId,
        handleInputChange,
        handleTaskAction,
        handleDelete,
        handleEdit,
        toggleCompleted,
        dueDate,
        handleDueChange,
        searchValue,
        handleSearchChange,
        priority,
        handlePriorityChange,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
