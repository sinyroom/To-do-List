import type { Task } from '@/types/taskType';

export const initialMockTasks: Task[] = [
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
