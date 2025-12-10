'use client';

import { useState } from 'react';

type Props = {
  onAdd: (title: string, dueDate: string) => void;
};

export default function CreateTask({ onAdd }: Props) {
  const [value, setValue] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    const trimmed = value.trim();

    if (!trimmed) {
      setError('할일을 입력해주세요.');
      return;
    }

    if (trimmed.toLowerCase() === '에러상황') {
      setError('이 내용은 허용되지 않습니다.');
      return;
    }

    onAdd(trimmed, dueDate);
    setValue('');
    setDueDate('');
    setError('');
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full rounded-md bg-blue-50 px-4 py-3'>
        <h2 className='text-lg font-semibold'>할일 생성</h2>
        <div className='mt-3 flex flex-col w-full gap-2'>
          <textarea
            placeholder='할일을 입력해주세요.'
            className='w-full rounded-md border border-gray-300 px-3 py-2 outline-none resize-none sm:h-10 h-16'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className='flex gap-2'>
            <h3 className='min-w-10 flex items-center justify-center font-bold text-12'>
              마감일
            </h3>
            <input
              type='date'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className='flex-1 min-w-0 rounded-md border px-3 py-2'
            />
            <button
              className='shrink-0 rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-blue-500'
              onClick={handleAdd}
            >
              추가
            </button>
          </div>
        </div>
        {error && <div className='text-red-500 text-sm mt-2 pl-1'>{error}</div>}
      </div>
    </div>
  );
}
