import React from "react";
import Styles from "./DeviceStyles.module.scss"

interface IProps {
  className?: string;
  children?: React.ReactNode;
}
const DeviceComponent = ({ className = "", children }: IProps) => {
  return (
    <div className={`${Styles.device} ${className}`}>
      <div className='sphone-device-frame'>
        <div className={Styles.contentWrapper}>{children}</div>
      </div>
      <div className='sphone-device-stripe'></div>
      <div className='sphone-device-header'>
        <div className='sphone-device-sensors'></div>
      </div>
      <div className='sphone-device-btns'></div>
    </div>
  );
};

export default DeviceComponent;
