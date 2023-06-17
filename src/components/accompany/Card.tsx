import useRouter from '@/hooks/useRouter';
import React from 'react';

export type CardProps = {
  id: number;
  memberId: number;
  writerName: string;
  accompanyLocal: string;
  accompanyDate: string;
  maxNum: number;
  accompanyTitle: string;
  accompanyContent: string;
  openStatus: boolean;
  createdAt: null; // 현재 어느타입으로 오는지모름 null | string일듯
  modifiedAt: null; // 현재 어느타입으로 오는지모름 null | string일듯
};

const Card = (props: CardProps) => {
  const { id, accompanyLocal, maxNum, accompanyTitle, accompanyContent } = props;
  const { goTo } = useRouter();
  return (
    <div
      onClick={() => goTo(`/accompany/${id}`)}
      className="border border-gray-300 p-[.5rem] rounded-2xl overflow-hidden cursor-pointer"
    >
      <div className="p-4 bg-gray-200 rounded-2xl">
        <div className="text-end">{accompanyLocal}</div>
        <h3 className="text-lg font-bold mb-2">{accompanyTitle}</h3>
        <p>{accompanyContent}</p>
        <p className="bt border-gray-300 text-end">현재인원 :&nbsp;{maxNum}</p>
      </div>
    </div>
  );
};
export default Card;
