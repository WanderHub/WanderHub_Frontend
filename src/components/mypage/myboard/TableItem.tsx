import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { BoardType } from '@/types/boardType';

interface TableItemProps {
  board: BoardType;
}
const TableItem = ({ board }: TableItemProps) => {
  const [isToggle, setIsToggle] = useState(false);

  const toggleDropdown = () => {
    setIsToggle(!isToggle);
  };

  return (
    <>
      <tr>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{board.local}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{board.createdAt.slice(0, 10)}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{board.modifiedAt.slice(0, 10)}</p>
        </td>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
          <p className="text-gray-900 whitespace-no-wrap">{board.title}</p>
        </td>
        <td className="pr-2 py-5 text-sm bg-white border-b border-gray-200">
          <button onClick={toggleDropdown}>
            {isToggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </button>
        </td>
      </tr>
      {isToggle && (
        <tr>
          <td className="px-5 py-5 w-full" colSpan={5}>
            <div>{board.content}</div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TableItem;
