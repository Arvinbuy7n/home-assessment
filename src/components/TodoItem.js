import {
  MdEdit,
  MdDelete,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

export const TodoItem = ({ todo, onDelete, onEdit, onToggle }) => {
  return (
    <div
      key={todo.id}
      className="flex justify-between items-center p-3 border border-[#888] rounded-lg bg-white shadow-xl"
    >
      <div className="flex items-center">
        <span className="cursor-pointer" onClick={() => onToggle(todo.id)}>
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
          onClick={() => onEdit(todo.id, todo.inputVal)}
        />
        <MdDelete
          className="cursor-pointer text-2xl bg-red-500 text-white p-1 rounded-lg"
          onClick={() => onDelete(todo.id)}
        />
      </div>
    </div>
  );
};
