import TaskCard from "./TaskCard";

export default function App() {
  const pendingTasks = [
    { id: 1, title: "Complete React project", dueDate: "2025-04-05", assigneeName: "Alice" },
    { id: 2, title: "Prepare for meeting", dueDate: "2025-04-06", assigneeName: "Bob" },
  ];

  const doneTasks = [
    { id: 3, title: "Submit report", completedAtDate: "2025-03-30", assigneeName: "Charlie" },
    { id: 4, title: "Fix UI bug", completedAtDate: "2025-03-29", assigneeName: "David" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Task Manager</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Pending Tasks */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Pending</h2>
          {pendingTasks.map((task) => (
            <TaskCard key={task.id} title={task.title} dueDate={task.dueDate} assigneeName={task.assigneeName} />
          ))}
        </div>

        {/* Done Tasks */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          {doneTasks.map((task) => (
            <TaskCard key={task.id} title={task.title} completedAtDate={task.completedAtDate} assigneeName={task.assigneeName} />
          ))}
        </div>
      </div>
    </div>
  );
}
