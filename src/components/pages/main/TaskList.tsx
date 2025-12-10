'use client';

import type { Task } from '@/types/taskType';
import TaskItem from './TaskItem';

type Props = {
  tasks: Task[];
  status: Task['status'];
  options: { label: string; value: Task['status'] }[];
  title: string;
  bgColor?: string;
  borderColor?: string;
  onChangeStatus: (id: number, status: Task['status']) => void;
};

export default function TaskList({
  tasks,
  status,
  options,
  title,
  bgColor = '',
  borderColor = '',
  onChangeStatus,
}: Props) {
  const filteredTasks = tasks.filter((t) => t.status === status);

  return (
    <div className='flex items-center justify-center'>
      <div
        className={`w-full rounded-md border-2 ${borderColor} ${bgColor} px-4 py-2`}
      >
        <div className='text-lg font-semibold'>{title}</div>
        <div className='mt-2 space-y-2'>
          {filteredTasks.length === 0 ? (
            <div className='text-sm text-gray-500'>등록된 할일이 없습니다</div>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                options={options}
                onChangeStatus={onChangeStatus}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
