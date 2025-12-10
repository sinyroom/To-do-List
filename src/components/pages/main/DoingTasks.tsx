'use client';

import type { Task } from '@/types/taskType';

type Props = {
  tasks: Task[];
};

export default function DoingTasks({ tasks }: Props) {
  const doing = tasks.filter((t) => t.status === 'doing');

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full rounded-md bg-green-50 px-4 py-2'>
        <div className='text-lg font-semibold'>Doing Tasks</div>
        <div className='mt-2 space-y-2'>
          {doing.length === 0 ? (
            <div className='text-sm text-gray-500'>
              진행중인 할일이 없습니다
            </div>
          ) : (
            doing.map((item) => (
              <div
                key={item.id}
                className='list-disc list-inside rounded-md border bd-gray-25 px-3 py-2'
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
