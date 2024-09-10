const TaskModal = ({
  isOpen,
  onClose,
  inputVal,
  handleInputChange,
  handleTaskAction,
  dueDate,
  handleDueChange,
  priority,
  handlePriorityChange,
  editedId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col gap-6 w-[400px]">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Title</p>
            <input
              type="text"
              placeholder="Add task"
              className="p-2 border border-slate-400 rounded-lg w-full"
              value={inputVal}
              onChange={handleInputChange}
              aria-label="Task input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Due date</p>
            <input
              type="date"
              className="p-2 border border-slate-400 rounded-lg w-full"
              value={dueDate}
              onChange={handleDueChange}
              aria-label="Due Date input"
            />
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold">Priority</p>

            <select
              value={priority}
              onChange={handlePriorityChange}
              className="p-2 border border-slate-400 rounded-lg w-full"
              aria-label="Priority select"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleTaskAction}
            className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
          >
            {editedId ? "Update" : "Add Task"}
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
