"use client";

import { useTodo } from "@/provider/TaskProvider";
import {
  MdEdit,
  MdDelete,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

export const TodoSearch = () => {
  const {
    tasks,
    inputVal,
    editedId,
    handleInputChange,
    handleTaskAction,
    handleDelete,
    handleEdit,
    toggleCompleted,
    searchValue,
    handleSearchChange,
  } = useTodo();

  const filterTask = tasks.filter((todo) =>
    todo.inputVal.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="border p-4 rounded-lg">
      <div className="flex gap-4 mb-4 border border-slate-600 rounded-2xl p-2 items-center">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Add task"
            aria-label="Task input"
            className="p-2 bg-transparent outline-none border border-slate-400 rounded-lg bg-white"
            value={inputVal}
            onChange={handleInputChange}
          />

          <input
            type="text"
            placeholder="Search..."
            aria-label="Search input"
            className="p-2 border border-slate-400 rounded-lg bg-white"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>

        <button
          onClick={handleTaskAction}
          className="px-4 py-2 bg-violet-500 text-white rounded-2xl hover:bg-violet-600"
        >
          {editedId ? "Update" : "Add Task"}
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {filterTask.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center p-3 border border-[#888] rounded-lg bg-white"
          >
            <div className="flex items-center">
              <span
                className="cursor-pointer"
                onClick={() => toggleCompleted(todo.id)}
              >
                {todo.completed ? (
                  <MdCheckBox className="text-green-500" />
                ) : (
                  <MdCheckBoxOutlineBlank className="text-gray-500" />
                )}
              </span>

              <div className="flex">
                <p
                  className={`ml-2 text-lg font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.inputVal}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <MdEdit
                className="cursor-pointer text-2xl bg-blue-500 text-white p-1 rounded-lg"
                onClick={() => handleEdit(todo.id, todo.inputVal)}
              />
              <MdDelete
                className="cursor-pointer text-2xl bg-red-500 text-white p-1 rounded-lg"
                onClick={() => handleDelete(todo.id)}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
