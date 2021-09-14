import React, {
  ReactElement,
  InputHTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';
import './input.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  type: HTMLInputTypeAttribute;
  onChange?: () => void;
}

const Button = ({
  inputSize = 'medium',
  label,
  fullWidth,
  type = 'text',
  ...props
}: IInputProps): ReactElement => {
  return (
    <>
      {!!label && <label htmlFor="">{label}</label>}

      <input
        type={type}
        className={[
          'grace-input',
          `grace-input--${inputSize}`,
          `${fullWidth ? `grace-input--full` : null}`,
        ].join(' ')}
        {...props}
      />
    </>
  );
};

export default Button;
