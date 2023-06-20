import React from 'react';
import MyInfo from './myinfo/MyInfo';
import { myPageTabType } from './SideBar';
import MyBoard from './myboard/MyBoard';
import MyPlan from './myplan/MyPlan';

export interface ControlBoxPropsType {
  curTab: myPageTabType;
}

const ControlBox = ({ curTab }: ControlBoxPropsType) => {
  const myPageBoxOptions = (tabIdx: myPageTabType) => {
    switch (tabIdx) {
      case 'myInfo':
        return <MyInfo />;
      case 'myBoard':
        return <MyBoard />;
      case 'myPlan':
        return <MyPlan />;
      default:
        return <MyInfo />;
    }
  };
  return <div className="border col-span-4 w-full">{myPageBoxOptions(curTab)}</div>;
};

export default ControlBox;
