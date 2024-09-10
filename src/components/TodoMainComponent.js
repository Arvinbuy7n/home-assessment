import { TodoItem } from "./TodoItem";
import { useTodo } from "@/provider/TaskProvider";
import { FiPlus } from "react-icons/fi";
import TaskModal from "./TaskModal";
import { IoIosSearch } from "react-icons/io";

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
    priority,
    handlePriorityChange,
    dueDate,
    handleDueChange,
    openModal,
    setOpenModal,
    searchValue,
    handleSearchChange,
  } = useTodo();

  const filteredTasks = tasks.filter((todo) =>
    todo.inputVal.toLowerCase().includes(searchValue.toLowerCase())
  );

  const priorityOrder = { High: 3, Medium: 2, Low: 1 };

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }

    return new Date(b.dueDate) - new Date(a.dueDate);
  });

  return (
    <div className="border px-4 pt-4 rounded-lg relative flex flex-col gap-4">
      <div className="flex justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer ml-2"
          onClick={() => setOpenModal(true)}
        >
          <FiPlus />
          <p>Add Task</p>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search input"
            className="p-1 border border-slate-400 rounded-lg bg-white"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <IoIosSearch className="absolute right-2 bottom-2 text-gray-500 text-lg" />
        </div>
      </div>

      <TaskModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        inputVal={inputVal}
        handleInputChange={handleInputChange}
        handleTaskAction={handleTaskAction}
        dueDate={dueDate}
        handleDueChange={handleDueChange}
        priority={priority}
        handlePriorityChange={handlePriorityChange}
        editedId={editedId}
      />

      <ul className="flex flex-col gap-4 px-2 pt-2 pb-4 rounded-lg">
        {sortedTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={toggleCompleted}
            setOpenModal={setOpenModal}
          />
        ))}
      </ul>
    </div>
  );
};
