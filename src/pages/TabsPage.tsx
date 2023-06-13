import React from 'react';

import { TabsTitle } from '../components/TabsTitle';
import { TabsList } from '../components/TabsList';

export const TabsPage: React.FC = () => {
  return (
    <>
      <TabsTitle />
      <TabsList />
    </>
  );
};
