import cls from './styles.module.css';

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return <span className={`${cls.loader} ${className}`}></span>;
}
