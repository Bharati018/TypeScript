
import { useState } from "react";
import "./App.css";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function App() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [task, setTask] = useState<string>("");
    const [editId, setEditId] = useState<number | null>(null);

    // Add and Update Task
    const handleSubmit = () => {

        if (task.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        if (editId !== null) {

            setTodos(
                todos.map((todo) =>
                    todo.id === editId
                        ? { ...todo, title: task }
                        : todo
                )
            );

            setEditId(null);

        } else {

            const newTodo: Todo = {
                id: Date.now(),
                title: task,
                completed: false
            };

            setTodos([...todos, newTodo]);
        }

        setTask("");
    };

    // Delete Task
    const deleteTask = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Edit Task
    const editTask = (todo: Todo) => {
        setTask(todo.title);
        setEditId(todo.id);
    };

    // Complete Task
    const toggleComplete = (id: number) => {

        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    // Count Completed Tasks
    const completedCount = todos.filter(
        (todo) => todo.completed
    ).length;

    return (

        <div className="container">

            <h1>My Todo Application</h1>

            <p className="subtitle">
                Organize your daily tasks
            </p>

            <div className="input-section">

                <input
                    type="text"
                    placeholder="Enter your task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleSubmit();
                    }}
                />

                <button onClick={handleSubmit}>
                    {editId !== null ? "Update Task" : "Add Task"}
                </button>

            </div>

            <div className="stats">

                <div className="stat-box">
                    <h2>{todos.length}</h2>
                    <p>Total Tasks</p>
                </div>

                <div className="stat-box">
                    <h2>{completedCount}</h2>
                    <p>Completed</p>
                </div>

                <div className="stat-box">
                    <h2>{todos.length - completedCount}</h2>
                    <p>Pending</p>
                </div>

            </div>

            <div className="task-list">

                <h2>My Tasks</h2>

                {todos.length === 0 ? (

                    <p className="empty">
                        No tasks available. Add your first task!
                    </p>

                ) : (

                    todos.map((todo) => (

                        <div className="task-item" key={todo.id}>

                            <div className="task-info">

                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleComplete(todo.id)}
                                />

                                <span
                                    className={
                                        todo.completed
                                            ? "completed"
                                            : ""
                                    }
                                >
                                    {todo.title}
                                </span>

                            </div>

                            <div className="actions">

                                <button
                                    className="edit-btn"
                                    onClick={() => editTask(todo)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="delete-btn"
                                    onClick={() => deleteTask(todo.id)}
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))

                )}

            </div>

        </div>
    );
}

export default App;
