import React from 'react';
import { TodoStatus } from 'common/components/TodoStatus';
import { TodoActive } from 'common/components/TodoActive';
import { TodoArchive } from 'common/components/TodoArchive';

export const MainPage = () => {
  return (
    <main className="main">
      <TodoActive />
      <TodoStatus />
      <TodoArchive />
    </main>
  );
};
