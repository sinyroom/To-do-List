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
    <div className={`flex items-center justify-between gap-2 ${bgColor || ''}`}>
      <div className='flex-1 min-w-0 border-b border-gray-300 px-3 py-2'>
        {task.title}
        {task.dueDate && (
          <div className='text-sm text-gray-500 mt-1'>{task.dueDate} 까지</div>
        )}
      </div>
      <DropdownList
        options={options}
        selectedStatus={task.status}
        onChangeStatus={(status) => onChangeStatus(task.id, status)}
      />
    </div>
  );
}
