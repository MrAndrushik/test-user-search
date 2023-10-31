import { SelectedUserContext } from '@/providers/SelectedUserProvider';
import { Dialog } from '@headlessui/react';
import { useContext, useMemo } from 'react';
import Close from '@/assets/icons/close.svg';
import cls from './styles.module.css';

export function Modal() {
  const { selectedUser, setSelectedUser } = useContext(SelectedUserContext);

  const data = useMemo(
    () => ({
      Телефон: selectedUser?.phone || '-',
      Почта: selectedUser?.email || '-',
      'Дата приема': selectedUser?.hire_date || '-',
      Должность: selectedUser?.position_name || '-',
      Подразделение: selectedUser?.department || '-',
    }),
    [selectedUser],
  );

  return (
    <Dialog className={cls.dialog} open={selectedUser !== null} onClose={() => setSelectedUser?.(null)}>
      <div className={cls.overlay}></div>
      <div className={cls.scrollable}>
        <div className={cls.panelBlock}>
          <Dialog.Panel className={cls.panel}>
            <p className={cls.name}>{selectedUser?.name}</p>
            <ul className={cls.list}>
              {Object.entries(data).map(([caption, text], idx) => (
                <li key={idx} className={cls.item}>
                  <p className={`${cls.caption} ${cls.target}`}>{caption}</p>
                  <p className={cls.text}>{text}</p>
                </li>
              ))}
            </ul>
            <div className={cls.additional}>
              <p className={cls.caption}>Дополнительная информация:</p>
              <p className={cls.text}>
                Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя
                макта страницы.
              </p>
            </div>
            <button onClick={() => setSelectedUser?.(null)} className={cls.btn}>
              <img src={Close} alt="close" className={cls.icon} />
            </button>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}
