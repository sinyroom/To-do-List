'use client';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ value, onChange, onSearch }: Props) {
  return (
    <div className='flex items-center justify-center gap-2'>
      <input
        type='text'
        placeholder='🔍 할일을 검색해주세요'
        className='w-full ml-3 border-b border-gray-300 py-2 outline-none focus:border-b-2 focus:border-primary-500'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch();
        }}
      />
      <button
        className='w-20 px-3 py-1 border text-blue-900 bg-blue-50 rounded-md'
        onClick={onSearch}
      >
        검색
      </button>
    </div>
  );
}
