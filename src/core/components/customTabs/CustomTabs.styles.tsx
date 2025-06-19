import { styled } from '@mui/material/styles';
import { Box, Tabs, Tab } from '@mui/material';

export const StyledTabList = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  borderBottom: '1px solid #607D8B',
  marginTop: '15px',
});

export const StyledTabs = styled(Tabs)({
  gap: '10px',
  '.MuiTabs-list ': {
    'button:focus': {
      outline: 'none',
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '.MuiTabs-scroller::before': {
    background: 'none',
  },
  '.MuiTabs-flexContainer ': {
    gap: '8px',
  },
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '24px',
  color: '#3C3F58',
  padding: '8px 16px',
  minWidth: '119px',
  minHeight: '40px',
  borderRadius: '6px 6px 0 0',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  borderBottom: 'none',
  borderTop: 'none',

  '&.Mui-selected': {
    backgroundColor: '#1A3A71',
    color: '#fff',
  },

  '& .MuiTab-iconWrapper': {
    marginBottom: 0,
  },
}));
