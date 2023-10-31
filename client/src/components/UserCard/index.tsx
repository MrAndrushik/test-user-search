import { User } from '@/types/common';
import cls from './styles.module.css';
import Mobile from '@/assets/icons/mobile.svg';
import Mail from '@/assets/icons/mail.svg';
import { ComponentProps, ElementType, useContext } from 'react';
import { SelectedUserContext } from '@/providers/SelectedUserProvider';

interface UserCardOwnProps<E extends ElementType = ElementType> {
  user: User;
  as?: E;
}

type UserCardProps<E extends ElementType> = UserCardOwnProps<E> & Omit<ComponentProps<E>, keyof UserCardOwnProps>;

const defaultElement = 'div';

export const UserCard = <E extends ElementType = typeof defaultElement>({ user, as }: UserCardProps<E>) => {
  const { setSelectedUser } = useContext(SelectedUserContext);
  const TagName = as || defaultElement;

  return (
    <TagName className={cls.block} onClick={() => setSelectedUser?.(user)}>
      <p className={cls.caption}>{user.name}</p>
      <ul className={cls.list}>
        <li className={cls.row}>
          <img src={Mobile} alt="mobile" className={cls.icon} />
          <p className={cls.text}>{user.phone}</p>
        </li>
        <li className={cls.row}>
          <img src={Mail} alt="mail" className={cls.icon} />
          <p className={cls.text}>{user.email}</p>
        </li>
      </ul>
    </TagName>
  );
};
