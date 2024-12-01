import { useEffect, useRef } from 'react';
import styles from './Menu.module.scss';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const Menu = ({ isOpen, handleClose }: IProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCheckClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose(); 
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleCheckClick); 
    }

    return () => {
      document.removeEventListener('mousedown', handleCheckClick);
    };
  }, [isOpen, handleClose]);

  return (
    <div
      className={`${isOpen ? styles.open : styles.close} ${styles.modal}`} ref={modalRef}>      
    </div>
  );
};