import React, { ReactElement, ButtonHTMLAttributes } from 'react';
import './button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'info' | 'success' | 'error' | 'warning' | 'default';
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  label: string;
  outline?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant = 'default',
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
            ? `grace-button-outline grace-button-outline--${variant}`
            : `grace-button--${variant}`
        }`,
      ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
