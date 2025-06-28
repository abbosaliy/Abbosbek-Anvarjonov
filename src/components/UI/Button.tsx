import type React from 'react';

interface Props {
  onClick: () => void;
  title: string;
  className: string;
  children?: React.ReactNode;
}

function Button({ onClick, title, className = '', children }: Props) {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {children}
      {title}
    </button>
  );
}

export default Button;
