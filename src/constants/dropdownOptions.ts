import type { Task } from '@/types/taskType';

export const todoOptions: { label: string; value: Task['status'] }[] = [
  { label: '진행 중', value: 'doing' },
  { label: '완료', value: 'done' },
];

export const doingOptions: { label: string; value: Task['status'] }[] = [
  { label: '할 일', value: 'todo' },
  { label: '완료', value: 'done' },
];

export const doneOptions: { label: string; value: Task['status'] }[] = [
  { label: '할 일', value: 'todo' },
  { label: '진행 중', value: 'doing' },
];
