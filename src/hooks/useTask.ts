'use client';

import { useEffect, useState } from 'react';
import { initialMockTasks } from '@/constants/mockTasks';
import type { Task } from '@/types/taskType';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem('tasks');
        if (saved) {
          setTasks(JSON.parse(saved));
        } else {
          setTasks(initialMockTasks);
          localStorage.setItem('tasks', JSON.stringify(initialMockTasks));
        }
      } catch (e) {
        setTasks(initialMockTasks);
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks, loading]);

  const addTask = (title: string, dueDate: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    setTasks((prev) => [
      { id: Date.now(), title: trimmed, status: 'todo', dueDate },
      ...prev,
    ]);
  };

  const changeStatus = (id: number, status: Task['status']) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  return { tasks, loading, addTask, changeStatus, setTasks };
}
