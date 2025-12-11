# To-Do List

Next.js 기반의 간단한 Todo 웹 서비스.  
작업 추가, 상태 변경(진행중/완료), 검색/필터, 정렬, 상태 요약을 제공합니다.

## 🔗 Demo

https://to-do-list-one-alpha-97.vercel.app/

---

## 🚀 실행 방법

- 설치: `npm install`
- 개발 서버: `npm run dev` → http://localhost:3000
- 빌드: `npm run build`
- 프로덕션 실행: `npm run start`
- 린트: `npm run lint`

---

## 📦 사용 기술 및 버전

- `next`: 16.0.7
- `react`: 19.2.1
- `react-dom`: 19.2.1
- `typescript`: 5.9.3
- `tailwindcss`: 3.4.15
- `clsx`: 2.1.1
- `tailwind-merge`: 3.4.0
- `eslint`: 9.39.1
- `eslint-config-next`: 15.5.0
- `postcss`: 8.5.6
- `autoprefixer`: 10.4.20
- Bundler: **Turbopack**
- Deployment: **Vercel**

---

## 📁 주요 폴더 구조

- `src/app/(global)/page.tsx`  
  메인 페이지(상태 보유)

- `src/components/pages/main/*`

  - `CreateTask`
  - `SearchBar`
  - `Filter`
  - `TaskListContainer` 등

- `src/types/taskType.ts`  
  `Task` 타입 정의

- `src/constants/*`  
  드롭다운 옵션, 초기 Mock 데이터

- `src/styles/globals.css`  
  글로벌 스타일

- `tailwind.config.js`  
  테마 확장(색상/스크린/폰트 크기 등)

---

## 🧩 주요 기능

### 작업 생성

- `textarea` 입력 + “추가” 버튼
- 마감일 옵션 지원

### 상태 변경

- Todo → Doing → Done
- 드롭다운으로 변경

### 검색 / 필터

- 제목 검색
- 전체 / Todo / Doing / Done 필터

### 정렬

- 마감일 오름/내림 정렬

### 상태 요약

- Total / Doing / Done 개수 표시

---

## 🔍 과제 진행 시 집중한 부분

### 4.1 재사용 가능한 컴포넌트 구조

- todos / doingTasks / doneTasks 영역을 개별 컴포넌트로 나누지 않고  
  **상태와 스타일을 prop으로 전달하는 단일 재사용 컴포넌트**로 통합.
- 드롭다운 리스트도 영역(todos/doing/done)에 맞게  
  **동적으로 status 변경이 가능하도록 설계**.

### 4.2 사용자 편의성 중심 설계

- 드롭다운 밖 클릭 시 자동 닫힘 처리
- 검색창 Enter 키로 검색 가능
- 상태 변경 및 필터 UI를 직관적으로 보이도록 시각 구조 단순화

### 4.3 구조 정리

- 컴포넌트 흐름을 **TaskListContainer → TaskList → TaskItem**으로 재정리
- `Task` 타입을 분리하여 유지보수 편의성 확보

---

## ⏱️ 개발 소요 시간

- 총 작업 시간: 약 12시간
- 환경 설정 및 UI 작업 : 약 4시간
- 기능 구현 및 리팩토링: 약 8시간

---

## 🔧 시간 더 있었다면 개선하고 싶었던 부분

### 5.1 API + SSR

- 원래는 API 서버 + SSR로 구현하려 했으나  
  서버 구축 시간이 오래 걸려 **Mock Data + LocalStorage**로 우선 구현
- 이후 API 구축 후 SSR로 전환 예정

### 5.2 상태관리 개선

- 현재는 모든 상태를 `React hooks`로 관리
- 시간이 있었다면 **Zustand**로 전역 상태와 로직을 분리하고 싶었음

### 5.3 수정/삭제 기능

- 현재는 상태 변경만 가능
- 추후 **편집/삭제 기능 추가 + UI 개선** 계획

---

## 📘 설명

처음으로 Next.js 프로젝트 환경을 스스로 구축하며  
TypeScript, Tailwind 등 설정에서 시간이 소요되었습니다.  
이후 기능 구현과 구조 리팩토링을 진행하며  
재사용성과 유지보수성이 높은 구조를 만드는 데 집중했습니다.
