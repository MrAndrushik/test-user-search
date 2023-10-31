import { Search } from '@/components//Search';
import cls from './styles.module.css';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { UserList } from '@/components/UserList';

function App() {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce(value, 500);

  return (
    <main className={cls.main}>
      <Search value={value} setValue={setValue} />
      <UserList value={debouncedValue} />
    </main>
  );
}

export default App;
