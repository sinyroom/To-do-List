'use client';

import { useState } from 'react';
import CreateTask from '@/components/pages/main/CreateTask';
import Filter from '@/components/pages/main/Filter';
import SearchBar from '@/components/pages/main/SearchBar';
import TaskListContainer from '@/components/pages/main/TaskListContainer';
import { useTasks } from '@/hooks/useTask';

export default function Page() {
  const { tasks, loading, addTask, changeStatus } = useTasks();
  const [search, setSearch] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<'all' | 'todo' | 'doing' | 'done'>(
    'all'
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearch = () => {
    setSearch(inputValue);
  };

  if (loading) {
    return (
      <main className='flex min-h-screen justify-center items-center'>
        <div className='text-gray-500 text-lg'>로딩 중...</div>
      </main>
    );
  }

  return (
    <main className='flex min-h-screen justify-center p-6'>
      <div className='flex flex-col gap-3 w-full max-w-md rounded-xl border bg-white p-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Todo List</h1>
        <SearchBar
          value={inputValue}
          onChange={setInputValue}
          onSearch={handleSearch}
        />{' '}
        <CreateTask onAdd={addTask} />
        <Filter onChange={setFilter} onChangeSort={setSortOrder} />
        <TaskListContainer
          tasks={tasks}
          search={search}
          filter={filter}
          sortOrder={sortOrder}
          onChangeStatus={changeStatus}
        />
      </div>
    </main>
  );
}
