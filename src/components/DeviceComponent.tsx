import React from 'react';
import { SxProps, Theme } from '@mui/material';
import { ContentWrapper, Device } from "./DeviceComponetStyles";

interface IProps {
  wrapperStyles?: SxProps<Theme>;
  children?: React.ReactNode;
}
const DeviceComponent = ({ wrapperStyles, children }: IProps) => {
  return (
    <Device sx={wrapperStyles}>
      <div className='sphone-device-frame'>
        <ContentWrapper>{children}</ContentWrapper>
      </div>
      <div className='sphone-device-stripe'></div>
      <div className='sphone-device-header'>
        <div className='sphone-device-sensors'></div>
      </div>
      <div className='sphone-device-btns'></div>
    </Device>
  );
};

export default DeviceComponent;
