import React, { useState } from 'react';
import { StyledTab, StyledTabList, StyledTabs } from './CustomTabs.styles';
import { a11yProps, TabPanel } from './TabPanel';
import { motion, AnimatePresence } from 'framer-motion';
import {Box, Card} from "@mui/material";

export interface TabItem {
  label: string;
  icon?: React.ReactNode;
  iconSelected?: React.ReactNode;
  component: React.ReactNode;
  active: boolean;
}
interface CustomTabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
}
const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [tabIndex, setTabIndex] = useState(defaultIndex);

  const handleTabChange = (_: React.SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex);
  };

  const renderIcon = (tab: any, tabIndex: any, index: any) => {
    if (!tab.iconSelected && !tab.icon) {
      return <></>;
    }
    return tabIndex === index ? tab.iconSelected : tab.icon;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <StyledTabList className="custom-tab-list">
        <StyledTabs value={tabIndex} onChange={handleTabChange}>
          {tabs.map((tab, index) => {
            return tab.active ? (
                <StyledTab
                    key={index}
                    icon={renderIcon(tab, tabIndex, index)}
                    label={tab.label}
                    {...a11yProps(index)}
                />
            ) : (
                <></>
            );
          })}
        </StyledTabs>
      </StyledTabList>
      <AnimatePresence mode="wait">
        {tabs.map((tab, index) =>
            tabIndex === index && tab.active ? (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <TabPanel value={tabIndex} index={index}>
                    {tab.component}
                  </TabPanel>
                </motion.div>
            ) : null,
        )}
      </AnimatePresence>
    </Box>
  );
};
export default CustomTabs;
