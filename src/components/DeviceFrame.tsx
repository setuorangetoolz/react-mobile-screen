import React from "react";
import PhoneWrapper from "./DeviceStyles";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}
const DeviceFrame = ({ className = "", children }: IProps) => {
  return (
    <PhoneWrapper className={`${className}`}>
      <div className='sphone-device-frame'>
        <div className={"sphnone-content-wrapper"}>{children}</div>
      </div>
      <div className='sphone-device-stripe'></div>
      <div className='sphone-device-header'>
        <div className='sphone-device-sensors'></div>
      </div>
      <div className='sphone-device-btns'></div>
    </PhoneWrapper>
  );
};

export default DeviceFrame;
