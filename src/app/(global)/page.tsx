'use client';

import CreateTask from '@/components/pages/main/CreateTask';
import DoingTasks from '@/components/pages/main/DoingTasks';
import DoneTasks from '@/components/pages/main/DoneTasks';
import Filter from '@/components/pages/main/Filter';
import SearchBar from '@/components/pages/main/SearchBar';
import TaskStatus from '@/components/pages/main/TaskStatus';
import Todos from '@/components/pages/main/Todos';
import { useState } from 'react';
import type { Task } from '@/types/taskType';

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: trimmed, status: 'todo' },
    ]);
  };

  const handleChangeStatus = (id: number, status: Task['status']) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return (
    <main className='flex min-h-screen items-center justify-center p-6'>
      <div className='flex flex-col gap-3 w-full max-w-md rounded-xl border bg-white p-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Todo List</h1>
        <SearchBar />
        <TaskStatus tasks={tasks} />
        <CreateTask onAdd={handleAddTask} />
        <Filter />
        <Todos tasks={tasks} onChangeStatus={handleChangeStatus} />
        <DoingTasks tasks={tasks} />
        <DoneTasks tasks={tasks} />
      </div>
    </main>
  );
}
