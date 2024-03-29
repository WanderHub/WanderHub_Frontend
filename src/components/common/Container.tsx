import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <div className="w-[70%] min-h-[80vh] mx-auto py-8">{children}</div>;
};

export default Container;
