"use client";

import { useTodo } from "@/provider/TaskProvider";
import {
  MdEdit,
  MdDelete,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

export const TodoDueDate = () => {
  const {
    tasks,
    inputVal,
    editedId,
    handleInputChange,
    handleTaskAction,
    handleDelete,
    handleEdit,
    toggleCompleted,
    handleDueChange,
    dueDate,
  } = useTodo();

  const sortedTasks = tasks.sort(
    (a, b) => new Date(b.dueDate) - new Date(a.dueDate)
  );

  return (
    <div className="border p-4 rounded-lg">
      <div className="flex flex-col gap-3 mb-6 border border-slate-500 rounded-2xl p-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add task & date"
            className="p-2 bg-transparent outline-none border border-slate-400 rounded-lg bg-white"
            value={inputVal}
            onChange={handleInputChange}
          />

          <input
            type="date"
            className="border-2 rounded-lg p-2"
            value={dueDate}
            onChange={handleDueChange}
          />
        </div>

        <button
          onClick={handleTaskAction}
          className="px-4 py-2 bg-violet-500 text-white rounded-2xl hover:bg-violet-600 w-full"
        >
          {editedId ? "Update" : "Add Task"}
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {sortedTasks.map((todo) => (
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

              <div className="flex flex-col ml-2">
                <p
                  className={`text-xl font-semibold ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.inputVal}
                </p>
                <p
                  className={`text-sm ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  Due: {todo.dueDate}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <MdEdit
                className="cursor-pointer text-2xl bg-blue-500 text-white p-1 rounded-lg"
                onClick={() => handleEdit(todo.id, todo.inputVal, todo.dueDate)}
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
