import React from 'react';
import Button from '@pages/Community/Button';
import PostList from '@pages/Community/PostList';

const Board = () => {
  return (
    <div className="flex flex-col px-20">
      <Button />
      <PostList />
    </div>
  );
};

export default Board;
