import React from 'react';
import { mapList } from '@/constant/MapPath';
import useRouter from '@/hooks/useRouter';

const RegionBtns = () => {
  const { goTo } = useRouter();
  return (
    <ul className="grid grid-cols-9 gap-4 px-10 text-sm font-medium text-center text-gray-500">
      {mapList.map(item => {
        return (
          <li key={item.id} className="mr-2 mb-2 h-full">
            <button
              onClick={() => goTo(`?curTab=${item.id}`, true)}
              className="py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:text-gray-800 rounded-full h-full"
            >
              {item.id}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default RegionBtns;
