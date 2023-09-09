import React from 'react';

type CustomBtnProps = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  marginRight?: boolean;
};

const CustomBtn: React.FC<CustomBtnProps> = ({ isActive, onClick, children, marginRight }) => {
    const buttonClass = `button ${isActive ? 'is-primary' : 'is-primary is-outlined'} ${marginRight ? "mr-3" : ""}`;
    return (
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default CustomBtn;
  