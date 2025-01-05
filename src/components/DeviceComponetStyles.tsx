import { Box, styled } from '@mui/material';


export const ContentWrapper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  zIndex: 1,
  position: 'relative',
  background: 'white',
  borderRadius: 46,
}));

export const Device = styled(Box)(() => ({
  height: '100%',
  maxHeight: 650,
  minHeight: 650,
  minWidth: 350,
  aspectRatio: 0.5,
  position: 'relative',
  "& > *":{
    boxSizing:'border-box',
  },
  '& .sphone-device-frame': {
    height: '100%',
    background: '#222',
    borderRadius: '68px',
    boxShadow: 'inset 0 0 2px 2px #c8cacb, inset 0 0 0 7px #e2e3e4',
    padding: 20,
    width: '100%',
  },
  '& .sphone-device-header': {
    background: '#222',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 30,
    position: 'absolute',
    left: 'calc(50% - 17%)',
    top: 20,
    width: '35%',
    zIndex: 1,
    '&:before, &:after': {
      content: '""',
      height: 10,
      position: 'absolute',
      top: 0,
      width: 10,
    },
    '&:before': {
      background: 'radial-gradient(circle at bottom right, transparent 0, transparent 75%, #222 75%, #222 100%)',
      right: -10,
    },
    '&:after': {
      background: 'radial-gradient(circle at bottom left,transparent 0,transparent 75%,#222 75%,#222 100%)',
      left: -10,
    },
    '& .sphone-device-sensors': {
      position: 'absolute',
      width: '90%',
      top: -20,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
      },
      '&:before': {
        background:
          'radial-gradient(farthest-corner at 20% 20%, #6074bf 0, transparent 40%), radial-gradient(farthest-corner at 80% 80%, #513785 0, #24555e 20%, transparent 50%)',
        borderRadius: '50%',
        boxShadow: '0 0 1px 1px rgba(255, 255, 255, .05)',
        height: 10,
        left: '40%',
        marginLeft: '42px',
        top: 30,
        width: 10,
      },
      '&:after': { background: '#333', borderRadius: 3, height: 6, left: 50, marginLeft: -25, top: 32, width: 50 },
    },
  },
  '& .sphone-device-btns': {
    background: '#c8cacb',
    height: 32,
    left: -2,
    position: 'absolute',
    top: 115,
    width: 3,
    '&:before, &:after': {
      background: '#c8cacb',
      content: '""',
      height: 62,
      left: 0,
      position: 'absolute',
      width: 3,
    },
    '&:before': { top: 140 },
    '&:after': { top: 60 },
  },
}));
