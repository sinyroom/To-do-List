'use client';

import type { Task } from '@/types/taskType';
import DropdownList from './DropdownList';

type Props = {
  tasks: Task[];
  onChangeStatus: (id: number, status: Task['status']) => void;
};

export default function Todos({ tasks, onChangeStatus }: Props) {
  const todos = tasks.filter((t) => t.status === 'todo');
  const isEmpty = todos.length === 0;

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full rounded-md bg-gray-25 px-4 py-2'>
        <div className='text-lg font-semibold'>Todos</div>
        <div className='mt-2 space-y-2'>
          {isEmpty ? (
            <div className='text-sm text-gray-500'>등록된 할일이 없습니다</div>
          ) : (
            todos.map((item) => (
              <div
                key={item.id}
                className='flex items-center justify-between gap-1'
              >
                <DropdownList
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
