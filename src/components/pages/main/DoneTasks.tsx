'use client';

import type { Task } from '@/types/taskType';
import DropdownList from './DropdownList';
import { doneOptions } from '@/constants/dropdownOptions';

type Props = {
  tasks: Task[];
  onChangeStatus: (id: number, status: Task['status']) => void;
};

export default function DoneTasks({ tasks, onChangeStatus }: Props) {
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
                className='flex items-center justify-between gap-1'
              >
                <DropdownList
                  options={doneOptions}
                  onChangeStatus={(status) => onChangeStatus(item.id, status)}
                />
                <div className='flex-1 min-w-0 rounded-md border border-gray-300 px-3 py-2'>
                  {item.title}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
