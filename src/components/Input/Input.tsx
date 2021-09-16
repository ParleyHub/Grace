import React, {
  ReactElement,
  InputHTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';
import './input.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
  buttonLabel?: string | ReactElement;
  disabled?: boolean;
  fullWidth?: boolean;
  type: HTMLInputTypeAttribute;
  onChange?: () => void;
}

const Input = ({
  inputSize = 'medium',
  type = 'text',
  buttonLabel,
  fullWidth,
  ...props
}: IInputProps): ReactElement => {
  return (
    <div className={`${!!buttonLabel ? 'grace-input-group' : null}`}>
      <input
        type={type}
        className={[
          'grace-input',
          `grace-input--${inputSize}`,
          `${fullWidth ? `grace-input--full` : null}`,
        ].join(' ')}
        {...props}
      />

      {!!buttonLabel && (
        <button
          className={`grace-button grace-button--info grace-button--${inputSize}`}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Input;
