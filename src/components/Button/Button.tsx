import React, { ReactElement, ButtonHTMLAttributes } from 'react';
import './button.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'info' | 'success' | 'error' | 'warning' | 'default';
  size?: 'small' | 'medium' | 'large';
  label: string | ReactElement;
  outline?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button = ({
  variant = 'default',
  size = 'medium',
  outline = false,
  className = '',
  label = '',
  fullWidth,
  ...props
}: IButtonProps): ReactElement => {
  return (
    <button
      type="button"
      className={[
        className,
        'grace-button',
        `grace-button--${size}`,
        `${fullWidth ? `grace-button--full` : ''}`,
        `${
          outline
            ? `grace-button-outline grace-button-outline--${variant}`
            : `grace-button--${variant}`
        }`,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
