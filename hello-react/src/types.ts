export interface Task {
  id: number;
  title: string;
  description?: string;
  dueDate: string;
  completedAtDate?: string;
  assigneeName?: string;
}
