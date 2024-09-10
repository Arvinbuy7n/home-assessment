"use client";

import { useTodo } from "@/provider/TaskProvider";
import {
  MdEdit,
  MdDelete,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

export const TodoPriority = () => {
  const {
    tasks,
    inputVal,
    editedId,
    handleInputChange,
    handleTaskAction,
    handleDelete,
    handleEdit,
    toggleCompleted,
    priority,
    handlePriorityChange,
  } = useTodo();

  const sortedTask = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <div className="border p-4 rounded-lg">
      <div className="flex flex-col gap-3 mb-6 border border-slate-600 rounded-2xl p-3 items-center">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add task & priority"
            aria-label="Task input"
            className="p-2 bg-transparent outline-none border border-slate-400 rounded-lg bg-white"
            value={inputVal}
            onChange={handleInputChange}
          />

          <select
            value={priority}
            onChange={handlePriorityChange}
            className="border border-slate-400 rounded-lg p-2 bg-white"
            aria-label="Priority select"
          >
            <option value={"High"}>High</option>
            <option value={"Medium"}>Medium</option>
            <option value={"Low"}>Low</option>
          </select>
        </div>

        <button
          onClick={handleTaskAction}
          className="py-2 bg-violet-500 text-white rounded-2xl hover:bg-violet-600 w-full"
        >
          {editedId ? "Update" : "Add Task"}
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        {sortedTask.map((todo) => (
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
                  className={` text-sm ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  priority: {todo.priority}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <MdEdit
                className="cursor-pointer text-2xl bg-blue-500 text-white p-1 rounded-lg"
                onClick={() =>
                  handleEdit(todo.id, todo.inputVal, todo.priority)
                }
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
