import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TodoMainComponent } from "./TodoMainComponent";
import { TodoProvider } from "@/provider/TaskProvider"; // Import the context provider

describe("TodoMainComponent", () => {
  it("renders correctly and handles adding a task", () => {
    render(
      <TodoProvider>
        <TodoMainComponent />
      </TodoProvider>
    );

    // Check if the input field and button are rendered
    const inputElement = screen.getByPlaceholderText("Add task");
    const addButton = screen.getByText("Add Task");

    expect(inputElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    // Simulate typing into the input field
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    expect(inputElement.value).toBe("New Task"); // Verify that input works

    // Simulate clicking the "Add Task" button
    fireEvent.click(addButton);

    // Check if the new task has been added to the list
    const taskItem = screen.getByText("New Task");
    expect(taskItem).toBeInTheDocument();
  });

  it("handles toggling task completion", () => {
    render(
      <TodoProvider>
        <TodoMainComponent />
      </TodoProvider>
    );

    // Simulate adding a task
    const inputElement = screen.getByPlaceholderText("Add task");
    const addButton = screen.getByText("Add Task");
    fireEvent.change(inputElement, { target: { value: "Complete Task" } });
    fireEvent.click(addButton);

    // Check if the task was added
    const taskItem = screen.getByText("Complete Task");
    expect(taskItem).toBeInTheDocument();

    // Simulate toggling task completion
    const toggleButton = screen.getByRole("checkbox"); // Assuming checkbox for toggle
    fireEvent.click(toggleButton);

    // Check if the task gets the "completed" class or style
    expect(taskItem).toHaveClass("line-through"); // Example of checking if the task is marked as complete
  });
});
