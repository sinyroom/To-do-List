'use client';

import { useState } from 'react';

type Props = {
  onChange: (filter: 'all' | 'todo' | 'doing' | 'done') => void;
};

export default function Filter({ onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'todo' | 'doing' | 'done'>(
    'all'
  );

  const toggle = () => setOpen((v) => !v);

  const selectFilter = (value: 'all' | 'todo' | 'doing' | 'done') => {
    setFilter(value);
    setOpen(false);
    onChange(value);
  };

  const labelMap = {
    all: '전체',
    todo: '해야 할 일',
    doing: '진행 중인 할 일',
    done: '완료된 할 일',
  };

  return (
    <div className='relative flex justify-end'>
      <button onClick={toggle}>{labelMap[filter]} ▾</button>

      {open && (
        <ul className='absolute top-full mt-2 right-0 bg-white shadow-lg z-50 rounded-md border border-gray-200 overflow-hidden'>
          <li>
            <button
              className='block w-full text-left px-4 py-2 hover:bg-gray-50'
              onClick={() => selectFilter('all')}
            >
              전체
            </button>
          </li>
          <li>
            <button
              className='block w-full text-left px-4 py-2 hover:bg-gray-50'
              onClick={() => selectFilter('todo')}
            >
              해야 할 일
            </button>
          </li>
          <li>
            <button
              className='block w-full text-left px-4 py-2 hover:bg-gray-50'
              onClick={() => selectFilter('doing')}
            >
              진행 중인 할 일
            </button>
          </li>
          <li>
            <button
              className='block w-full text-left px-4 py-2 hover:bg-gray-50'
              onClick={() => selectFilter('done')}
            >
              완료된 할 일
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
