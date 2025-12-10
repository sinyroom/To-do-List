'use client';

import type { Task } from '@/types/taskType';
import DropdownList from './DropdownList';
import { doingOptions } from '@/constants/dropdownOptions';

type Props = {
  tasks: Task[];
  onChangeStatus: (id: number, status: Task['status']) => void;
};

export default function DoingTasks({ tasks, onChangeStatus }: Props) {
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
                className='flex items-center justify-between gap-1'
              >
                <DropdownList
                  options={doingOptions}
                  onChangeStatus={(status) => onChangeStatus(item.id, status)}
                />

                <div className='flex-1 min-w-0 rounded-md border border-gray-300 px-3 py-2 bg-green-50'>
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
