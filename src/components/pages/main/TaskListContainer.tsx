'use client';

import TaskList from './TaskList';
import {
  todoOptions,
  doingOptions,
  doneOptions,
} from '@/constants/dropdownOptions';
import type { Task } from '@/types/taskType';

type Props = {
  tasks: Task[];
  search: string;
  filter: 'all' | 'todo' | 'doing' | 'done';
  onChangeStatus: (id: number, status: Task['status']) => void;
};

export default function TaskListContainer({
  tasks,
  search,
  filter,
  onChangeStatus,
}: Props) {
  const normalize = (str: string) => str.replace(/\s+/g, '').toLowerCase();

  const filteredTasks = tasks.filter(
    (t) =>
      (filter === 'all' || t.status === filter) &&
      normalize(t.title).includes(normalize(search))
  );

  if (filteredTasks.length === 0) {
    return (
      <div className='text-center text-gray-500 py-6'>
        검색 결과가 없습니다.
      </div>
    );
  }

  const lists = [
    {
      status: 'todo',
      title: 'Todos',
      options: todoOptions,
      bgColor: '',
      borderColor: 'border-gray-700',
    },
    {
      status: 'doing',
      title: 'Doing Tasks',
      options: doingOptions,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-700',
    },
    {
      status: 'done',
      title: 'Done Tasks',
      options: doneOptions,
      bgColor: 'bg-red-50',
      borderColor: 'border-red-700',
    },
  ] as const;

  return (
    <>
      {lists.map((list) => {
        const taskList = filteredTasks.filter((t) => t.status === list.status);
        if (!taskList.length) return null;
        return (
          <TaskList
            key={list.status}
            tasks={taskList}
            status={list.status}
            title={list.title}
            options={list.options}
            bgColor={list.bgColor}
            borderColor={list.borderColor}
            onChangeStatus={onChangeStatus}
          />
        );
      })}
    </>
  );
}
