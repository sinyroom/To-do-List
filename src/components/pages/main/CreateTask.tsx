'use client';

import { useState } from 'react';

type Props = {
  onAdd: (title: string) => void;
};

export default function CreateTask({ onAdd }: Props) {
  const [value, setValue] = useState('');

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full rounded-md bg-blue-50 px-4 py-3'>
        <div className='text-lg font-semibold'>할일 생성</div>
        <div className='mt-3 flex w-full gap-2'>
          <textarea
            placeholder='할일을 입력해주세요.'
            className='min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 outline-none resize-none sm:h-10 h-16'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className='shrink-0 rounded-md bg-primary-500 px-4 py-2 text-white hover:bg-blue-500'
            onClick={() => {
              onAdd(value);
              setValue('');
            }}
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
}
