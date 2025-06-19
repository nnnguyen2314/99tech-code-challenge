import React from 'react';
import { Box } from '@mui/material';
export function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export const TabPanel: React.FC<{ value: number; index: number; children: React.ReactNode }> = ({
  value,
  index,
  children,
}) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="custom-tab-panels"
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </Box>
  );
};
