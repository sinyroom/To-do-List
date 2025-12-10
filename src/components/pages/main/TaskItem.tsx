'use client';

import type { Task } from '@/types/taskType';
import DropdownList from './DropdownList';

type Props = {
  task: Task;
  options: { label: string; value: Task['status'] }[];
  onChangeStatus: (id: number, status: Task['status']) => void;
  bgColor?: string;
};

export default function TaskItem({
  task,
  options,
  onChangeStatus,
  bgColor,
}: Props) {
  return (
    <div className={`flex items-center justify-between gap-1 ${bgColor || ''}`}>
      <DropdownList
        options={options}
        onChangeStatus={(status) => onChangeStatus(task.id, status)}
      />
      <div className='flex-1 min-w-0 rounded-md border border-gray-300 px-3 py-2'>
        {task.title}
      </div>
    </div>
  );
}
