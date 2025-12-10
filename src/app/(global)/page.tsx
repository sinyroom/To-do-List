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

const initialMockTasks: Task[] = [
  { id: 1, title: '리액트 강의 수강하기', status: 'todo' },
  { id: 2, title: '15분 달리기', status: 'doing' },
  { id: 3, title: '프론트엔드 이력서 수정', status: 'done' },
  { id: 4, title: '필터 컴포넌트 UI 개선', status: 'doing' },
  { id: 5, title: '가을여행 일정 확정하기', status: 'todo' },
  { id: 6, title: 'Todo List 기능 완성', status: 'done' },
];

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>(initialMockTasks);
  const [filter, setFilter] = useState<'all' | 'todo' | 'doing' | 'done'>(
    'all'
  );

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

  const statusComponents = [
    { status: 'todo', Component: Todos },
    { status: 'doing', Component: DoingTasks },
    { status: 'done', Component: DoneTasks },
  ];

  return (
    <main className='flex min-h-screen items-center justify-center p-6'>
      <div className='flex flex-col gap-3 w-full max-w-md rounded-xl border bg-white p-6 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Todo List</h1>
        <SearchBar />
        <TaskStatus tasks={tasks} />
        <CreateTask onAdd={handleAddTask} />
        <Filter onChange={setFilter} />
        {statusComponents
          .filter(({ status }) => filter === 'all' || filter === status)
          .map(({ status, Component }) => (
            <Component
              key={status}
              tasks={tasks}
              onChangeStatus={handleChangeStatus}
            />
          ))}
      </div>
    </main>
  );
}
