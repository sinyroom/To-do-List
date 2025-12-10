import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const config = [
  ...compat.config({ extends: ['next/core-web-vitals'] }),
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**'] },
];

export default config;
