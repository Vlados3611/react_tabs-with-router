import React, { useMemo } from 'react';

import { useParams } from 'react-router-dom';

import { Tab } from '../types/Tab';

import { TabLink } from './TabLink';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsList: React.FC = () => {
  const { tabId = '' } = useParams();

  const getTabsById = (id: string): Tab | undefined => {
    const foundTab = tabs.find((tab: Tab) => (
      tab.id === id
    ));

    return foundTab;
  };

  const currTab = useMemo(() => {
    return getTabsById(tabId);
  }, [tabId]);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <TabLink
              key={tab.id}
              id={tab.id}
              currId={tabId}
              title={tab.title}
            />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currTab
          ? (currTab?.content)
          : ('Please select a tab')}
      </div>
    </>
  );
};
