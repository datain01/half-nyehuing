// GenerateButton.tsx
import React from 'react';

type GenerBtnProps = {
  label: string;
  onClick: () => void;
};

const GenerBtn: React.FC<GenerBtnProps> = ({ label, onClick }) => {
  return (
    <div className="column is-narrow">
      <button className='button is-primary is-outlined' onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default GenerBtn;
