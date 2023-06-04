import React from 'react';
import Button from '@/components/Atoms/Button';

interface TitleProps {
  title: string;
  isWithBtn: boolean;
  btnTxt?: string;
}

const Title = ({ title, isWithBtn, btnTxt }: TitleProps) => {
  return (
    <div className="border-2 shadow-md inset h-16 rounded-full flex items-center justify-between px-4">
      <h2 className="font-bold text-3xl flex-grow text-center ">{title}</h2>
      {isWithBtn && <Button clickEvent={() => console.log('click')}>{btnTxt ?? ''}</Button>}
    </div>
  );
};

export default Title;
