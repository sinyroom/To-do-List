'use client';

import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

type Props = {
  onChange: (filter: 'all' | 'todo' | 'doing' | 'done') => void;
  onChangeSort?: (order: 'asc' | 'desc') => void;
};

export default function Filter({ onChange, onChangeSort }: Props) {
  const [open, setOpen] = useState(false);
  const [openSort, setOpenSort] = useState(false);
  const [filter, setFilter] = useState<'all' | 'todo' | 'doing' | 'done'>(
    'all'
  );
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');
  const filterRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen((v) => !v);

  const selectFilter = (value: 'all' | 'todo' | 'doing' | 'done') => {
    setFilter(value);
    setOpen(false);
    onChange(value);
  };

  const selectSort = (value: 'asc' | 'desc') => {
    setSort(value);
    setOpenSort(false);
    onChangeSort?.(value);
  };

  const labelMap = {
    all: '전체',
    todo: '해야 할 일',
    doing: '진행 중인 할 일',
    done: '완료된 할 일',
  };
  const sortLabelMap = {
    asc: '마감일 빠른 순',
    desc: '마감일 늦은 순',
  };

  useClickOutside(filterRef, open, () => setOpen(false));
  useClickOutside(sortRef, openSort, () => setOpenSort(false));

  return (
    <div className='relative flex flex-row justify-between gap-2 flex-wrap'>
      <div ref={filterRef} className='relative'>
        <button className='rounded-md border px-3 py-2' onClick={toggle}>
          {labelMap[filter]} ▾
        </button>

        {open && (
          <ul className='absolute top-full mt-2 left-0 bg-white shadow-lg z-50 rounded-md border border-gray-200 overflow-hidden min-w-40'>
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

      <div ref={sortRef} className='relative'>
        <button
          onClick={() => setOpenSort((v) => !v)}
          className='rounded-md border px-3 py-2'
        >
          {sortLabelMap[sort]} ▾
        </button>
        {openSort && (
          <ul className='absolute top-full mt-2 right-0 bg-white shadow-lg z-50 rounded-md border border-gray-200 overflow-hidden min-w-40'>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-50'
                onClick={() => selectSort('asc')}
              >
                마감일 빠른 순
              </button>
            </li>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-50'
                onClick={() => selectSort('desc')}
              >
                마감일 늦은 순
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
