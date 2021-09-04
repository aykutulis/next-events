import React from 'react';

import { MainLayoutHeader } from './MainLayoutHeader';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <MainLayoutHeader />
      <main>{children}</main>
    </>
  );
};
