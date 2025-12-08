import '@/styles/globals.css';
import type { ReactNode } from 'react';
import { pretendard } from '@/styles/fonts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'To-do List',
  description: 'to-do list project',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
