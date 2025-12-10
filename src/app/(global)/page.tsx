'use client';

import { useState } from 'react';
import type { Task } from '@/types/taskType';
import CreateTask from '@/components/pages/main/CreateTask';
import Filter from '@/components/pages/main/Filter';
import SearchBar from '@/components/pages/main/SearchBar';
import TaskListContainer from '@/components/pages/main/TaskListContainer';
import { initialMockTasks } from '@/constants/mockTasks';

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>(initialMockTasks);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'todo' | 'doing' | 'done'>(
    'all'
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
        <SearchBar value={search} onChange={setSearch} onSearch={() => {}} />
        <CreateTask onAdd={handleAddTask} />
        <Filter onChange={setFilter} />
        <TaskListContainer
          tasks={tasks}
          search={search}
          filter={filter}
          onChangeStatus={handleChangeStatus}
        />
      </div>
    </main>
  );
}
