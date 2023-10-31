import Icon from '@/assets/icons/search.svg';
import cls from './styles.module.css';

interface SearchProps {
  value: string;
  setValue: (value: string) => void;
}

export const Search = ({ value, setValue }: SearchProps) => {
  return (
    <div className={cls.block}>
      <input value={value} onChange={(e) => setValue(e.target.value)} className={cls.search} type="text" />
      <img className={cls.icon} src={Icon} alt="search" />
    </div>
  );
};
