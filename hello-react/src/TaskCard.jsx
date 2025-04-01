import "./TaskCard.css";

export default function TaskCard({ title, dueDate, completedAtDate, assigneeName }) {
  return (
    <div className="task-card">
      <h3 className="task-title">{title}</h3>
      {dueDate && <p className="task-meta">Due: {dueDate}</p>}
      {completedAtDate && <p className="task-meta" style={{ color: "green" }}>Completed on: {completedAtDate}</p>}
      <p className="task-meta">Assigned to: {assigneeName}</p>
    </div>
  );
}
