import {
  MdEdit,
  MdDelete,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

export const TodoItem = ({
  todo,
  onDelete,
  onEdit,
  onToggle,
  setOpenModal,
}) => {
  return (
    <div
      key={todo.id}
      className="flex justify-between items-center p-3 border border-slate-400 rounded-lg bg-white shadow-xl"
    >
      <div className="flex items-center">
        <span className="cursor-pointer" onClick={() => onToggle(todo.id)}>
          {todo.completed ? (
            <MdCheckBox className="text-green-500 text-xl" />
          ) : (
            <MdCheckBoxOutlineBlank className="text-gray-500 text-xl" />
          )}
        </span>

        <div className="flex flex-col ml-3 gap-1">
          <p
            className={`text-xl font-semibold ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.inputVal}
          </p>

          <p
            className={`text-base ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            priority: {todo.priority}
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
          className="cursor-pointer text-3xl bg-blue-500 text-white p-1 rounded-lg"
          onClick={() => {
            onEdit(todo.id, todo.inputVal, todo.priority, todo.dueDate);
            setOpenModal(true);
          }}
        />
        <MdDelete
          className="cursor-pointer text-3xl bg-red-500 text-white p-1 rounded-lg"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </div>
  );
};
