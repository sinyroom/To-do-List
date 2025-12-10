export interface Task {
  id: number;
  title: string;
  status: 'todo' | 'doing' | 'done';
  dueDate?: string;
}
