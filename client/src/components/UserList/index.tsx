import { User } from '@/types/common';
import { UserCard } from '@/components/UserCard';
import { Loader } from '@/components/Loader';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';

import cls from './styles.module.css';

interface UserListProps {
  value?: string;
}

export const UserList = memo(function UserList({ value = 'Fer' }: UserListProps) {
  const {
    isPending,
    error,
    data = [],
  } = useQuery<User[]>({
    queryKey: ['users', value],
    queryFn: async ({ queryKey }) => {
      const [, value] = queryKey;
      const res = await fetch(`${import.meta.env.VITE_API_ROUTE}?term=${value}`);
      const data = await res.json();
      return data;
    },
  });

  if (isPending) {
    return <Loader className={`${cls.loader} ${cls.block}`} />;
  }

  if (error) {
    return <p className={`${cls.searchError} ${cls.block}`}>Ошибка при получениие данных</p>;
  }

  if (data.length === 0) {
    return <p className={`${cls.searchEmpty} ${cls.block}`}>Ничего не найдено</p>;
  }

  return (
    <ul className={cls.list}>
      {data.map((item) => (
        <UserCard as={'li'} key={`${item.name}-${item.email}`} user={item} />
      ))}
    </ul>
  );
});
