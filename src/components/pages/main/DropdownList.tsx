'use client';

import { useState } from 'react';
import type { Task } from '@/types/taskType';

export type Option = {
  label: string;
  value: Task['status'];
};

type Props = {
  options: Option[];
  selectedStatus: Task['status'];
  onChangeStatus: (status: Task['status']) => void;
};

export default function DropdownList({
  options,
  selectedStatus,
  onChangeStatus,
}: Props) {
  const [open, setOpen] = useState(false);

  const statusBgMap: Record<Option['value'], string> = {
    todo: 'bg-gray-25',
    doing: 'bg-green-100',
    done: 'bg-red-100',
  };

  return (
    <div className='relative'>
      <button
        className='min-w-0 rounded-2xl border bg-gray-50 px-3 py-2 text-12'
        onClick={() => setOpen((v) => !v)}
      >
        이동 ▾
      </button>

      {open && (
        <ul className='absolute left-1/2 -translate-x-1/2 z-10 mt-2 w-28 px-2 rounded-md border border-gray-200 bg-white shadow-lg'>
          {options.map((opt) => {
            const bgClass = statusBgMap[opt.value];
            const isSelected = opt.value === selectedStatus;
            return (
              <li key={opt.value} role='option' aria-selected={isSelected}>
                <button
                  className={`block w-full my-2 text-center text-sm rounded-lg hover:bg-gray-100 ${bgClass}`}
                  onClick={() => {
                    onChangeStatus(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
