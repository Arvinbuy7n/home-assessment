"use client";

import { TodoItem } from "./TodoItem";
import { useTodo } from "@/provider/TaskProvider";

export const TodoMainComponent = () => {
  const {
    tasks,
    inputVal,
    editedId,
    handleInputChange,
    handleTaskAction,
    handleDelete,
    handleEdit,
    toggleCompleted,
  } = useTodo();

  return (
    <div className="border p-4 rounded-lg">
      <div className="flex items-center mb-4 border border-slate-600 rounded-2xl p-2">
        <input
          type="text"
          placeholder="Add task"
          className="p-2 bg-transparent outline-none"
          value={inputVal}
          onChange={handleInputChange}
        />

        <button
          onClick={handleTaskAction}
          className="px-4 py-2 bg-violet-500 text-white rounded-2xl hover:bg-violet-600"
        >
          {editedId ? "Update" : "Add Task"}
        </button>
      </div>

      <ul className="flex flex-col gap-4 p-2 rounded-lg">
        {tasks.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={toggleCompleted}
          />
        ))}
      </ul>
    </div>
  );
};
