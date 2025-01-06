import React from "react";
import styles from "./DeviceStyles.module.scss";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}
const DeviceComponent = ({ className, children }: IProps) => {
  return (
    <div className={`${styles.device} ${className}`}>
      <div className='sphone-device-frame'>
        <div className={styles.contentWrapper}>{children}</div>
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
