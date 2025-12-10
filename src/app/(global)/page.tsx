'use client';

import CreateTask from '@/components/pages/main/CreateTask';
import Filter from '@/components/pages/main/Filter';
import SearchBar from '@/components/pages/main/SearchBar';
import { useState } from 'react';
import type { Task } from '@/types/taskType';
import TaskList from '@/components/pages/main/TaskList';
import {
  doingOptions,
  doneOptions,
  todoOptions,
} from '@/constants/dropdownOptions';

const initialMockTasks: Task[] = [
  {
    id: 1,
    title: '리액트 강의 수강하기',
    status: 'todo',
    dueDate: '2025-12-15',
  },
  { id: 2, title: '15분 달리기', status: 'doing', dueDate: '2025-12-11' },
  {
    id: 3,
    title: '프론트엔드 이력서 수정',
    status: 'done',
    dueDate: '2025-12-10',
  },
  {
    id: 4,
    title: '필터 컴포넌트 UI 개선',
    status: 'doing',
    dueDate: '2025-12-12',
  },
  {
    id: 5,
    title: '가을여행 일정 확정하기',
    status: 'todo',
    dueDate: '2025-12-20',
  },
  {
    id: 6,
    title: 'Todo List 기능 완성',
    status: 'done',
    dueDate: '2025-12-09',
  },
];

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>(initialMockTasks);
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'todo' | 'doing' | 'done'>(
    'all'
  );

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const searchedTasks = tasks.filter(
    (t) =>
      (filter === 'all' || t.status === filter) &&
      t.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddTask = (title: string, dueDate: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: trimmed, status: 'todo', dueDate },
    ]);
  };

  const handleChangeStatus = (id: number, status: Task['status']) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <main className='flex min-h-screen justify-center p-6'>
      <div className='flex flex-col gap-3 w-full max-w-md rounded-xl border bg-white p-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Todo List</h1>
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSearch={handleSearch}
        />
        <CreateTask onAdd={handleAddTask} />
        <Filter onChange={setFilter} />
        {(filter === 'all' || filter === 'todo') &&
          searchedTasks.some((t) => t.status === 'todo') && (
            <TaskList
              tasks={searchedTasks.filter((t) => t.status === 'todo')}
              status='todo'
              title='Todos'
              options={todoOptions}
              bgColor=''
              borderColor='border-gray-700'
              onChangeStatus={handleChangeStatus}
            />
          )}

        {(filter === 'all' || filter === 'doing') &&
          searchedTasks.some((t) => t.status === 'doing') && (
            <TaskList
              tasks={searchedTasks.filter((t) => t.status === 'doing')}
              status='doing'
              title='Doing Tasks'
              options={doingOptions}
              bgColor='bg-green-50'
              borderColor='border-green-700'
              onChangeStatus={handleChangeStatus}
            />
          )}

        {(filter === 'all' || filter === 'done') &&
          searchedTasks.some((t) => t.status === 'done') && (
            <TaskList
              tasks={searchedTasks.filter((t) => t.status === 'done')}
              status='done'
              title='Done Tasks'
              options={doneOptions}
              bgColor='bg-red-50'
              borderColor='border-red-700'
              onChangeStatus={handleChangeStatus}
            />
          )}
      </div>
    </main>
  );
}
