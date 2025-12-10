'use client';

import type { Task } from '@/types/taskType';

type Props = {
  tasks: Task[];
};

export default function TaskStatus({ tasks }: Props) {
  const total = tasks.length;
  const doing = tasks.filter((t) => t.status === 'doing').length;
  const done = tasks.filter((t) => t.status === 'done').length;

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full px-4 py-2'>
        <div className='flex flex-col'>
          <div className='text-lg font-semibold'>Status</div>
          <div className='text-sm text-gray-500'>
            Total: {total} | Doing: {doing} | Done: {done}
          </div>
        </div>
      </div>
    </div>
  );
}
