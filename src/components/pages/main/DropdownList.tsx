'use client';

import { useState } from 'react';
import type { Task } from '@/types/taskType';

type Props = {
  onChangeStatus: (status: Task['status']) => void;
};

export default function DropdownList({ onChangeStatus }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative'>
      <button
        className='min-w-24 w-auto max-w-full rounded-full border border-gray-300 bg-white px-2 py-1 text-gray-700 hover:bg-gray-50'
        onClick={() => setOpen((v) => !v)}
      >
        상태 ▾
      </button>
      {open && (
        <ul
          className='absolute left-1/2 -translate-x-1/2 z-10 mt-2 w-24 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg'
          role='listbox'
        >
          <li role='option'>
            <button
              className='block w-full px-2 pt-2 pb-1 text-center text-sm hover:bg-gray-50 rounded-lg bg-green-300 text-green-900'
              onClick={() => {
                onChangeStatus('doing');
                setOpen(false);
              }}
            >
              진행 중
            </button>
          </li>
          <li role='option'>
            <button
              className='block w-full px-2 py-2 text-center text-sm hover:bg-gray-50 rounded-lg bg-red-300 text-red-900 font-bold'
              onClick={() => {
                onChangeStatus('done');
                setOpen(false);
              }}
            >
              완료
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
