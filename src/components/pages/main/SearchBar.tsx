'use client';

export default function SearchBar() {
  return (
    <div className='flex items-center justify-center'>
      <input
        type='text'
        placeholder='🔍 할일을 검색해주세요'
        className='w-full mx-3 border-b border-gray-300 py-2 outline-none focus:border-b-2 focus:border-primary-500'
      />
    </div>
  );
}
