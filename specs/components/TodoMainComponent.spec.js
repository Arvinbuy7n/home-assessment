import { render, screen, fireEvent } from "@testing-library/react";
import { TodoMainComponent } from "../TodoMainComponent";
import { useTodo } from "@/provider/TaskProvider";
import "@testing-library/jest-dom/extend-expect";

jest.mock("@/provider/TaskProvider", () => ({
  useTodo: jest.fn(),
}));

describe("TodoMainComponent", () => {
  beforeEach(() => {
    useTodo.mockReset();
  });

  it("renders the component and displays elements correctly", () => {
    useTodo.mockReturnValue({
      tasks: [],
      inputVal: "",
      editedId: null,
      handleInputChange: jest.fn(),
      handleTaskAction: jest.fn(),
      handleDelete: jest.fn(),
      handleEdit: jest.fn(),
      toggleCompleted: jest.fn(),
      priority: "Medium",
      handlePriorityChange: jest.fn(),
      dueDate: "",
      handleDueChange: jest.fn(),
      openModal: false,
      setOpenModal: jest.fn(),
      searchValue: "",
      handleSearchChange: jest.fn(),
    });

    render(<TodoMainComponent />);

    expect(screen.getByText("Add Task")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("opens the modal when add task is clicked", () => {
    const setOpenModal = jest.fn();
    useTodo.mockReturnValue({
      tasks: [],
      inputVal: "",
      editedId: null,
      handleInputChange: jest.fn(),
      handleTaskAction: jest.fn(),
      handleDelete: jest.fn(),
      handleEdit: jest.fn(),
      toggleCompleted: jest.fn(),
      priority: "Medium",
      handlePriorityChange: jest.fn(),
      dueDate: "",
      handleDueChange: jest.fn(),
      openModal: false,
      setOpenModal,
      searchValue: "",
      handleSearchChange: jest.fn(),
    });

    render(<TodoMainComponent />);

    fireEvent.click(screen.getByText("Add Task"));

    expect(setOpenModal).toHaveBeenCalledWith(true);
  });
});
