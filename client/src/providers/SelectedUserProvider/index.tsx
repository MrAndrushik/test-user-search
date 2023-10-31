import { Modal } from '@/components/Modal';
import { User } from '@/types/common';
import { ReactNode, createContext, useState } from 'react';

interface SelectedUserContext {
  selectedUser: User | null;
  setSelectedUser?: (user: User | null) => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const SelectedUserContext = createContext<SelectedUserContext>({
  selectedUser: null,
});

export const SelectedUserProvider = (props: ProviderProps) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {props.children}
      <Modal />
    </SelectedUserContext.Provider>
  );
};
