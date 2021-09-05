import React, { ReactElement } from 'react';
import './button.scss';

interface IButtonProps {
  type?: 'info' | 'success' | 'error' | 'warning' | 'default';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type = 'default',
  size = 'medium',
  outline = false,
  backgroundColor,
  label,
  ...props
}: IButtonProps): ReactElement => {
  return (
    <button
      type="button"
      className={[
        'grace-button',
        `grace-button--${size}`,
        `${
          outline
            ? `grace-button-outline grace-button-outline--${type}`
            : `grace-button--${type}`
        }`,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
