'use client';

import type { Task } from '@/types/taskType';

type Props = {
  tasks: Task[];
};

export default function DoneTasks({ tasks }: Props) {
  const done = tasks.filter((t) => t.status === 'done');

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full rounded-md bg-red-50 px-4 py-2'>
        <div className='text-lg font-semibold'>Done Tasks</div>
        <div className='mt-2 space-y-2'>
          {done.length === 0 ? (
            <div className='text-sm text-gray-500'>완료된 할일이 없습니다</div>
          ) : (
            done.map((item) => (
              <div
                key={item.id}
                className='rounded-md border border-gray-300 px-3 py-2'
              >
                {item.title}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
