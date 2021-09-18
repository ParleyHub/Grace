import React, {
  ReactElement,
  InputHTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';

import { Button } from '../Button';

import './input.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'small' | 'medium' | 'large';
  buttonLabel?: string | ReactElement;
  fullWidth?: boolean;
  type?: HTMLInputTypeAttribute | undefined;
}

const Input = ({
  inputSize = 'medium',
  buttonLabel,
  fullWidth,
  type = 'text',
  ...props
}: IInputProps): ReactElement => {
  return (
    <div className={`${!!buttonLabel ? 'grace-input-group' : ''}`}>
      <input
        className={[
          'grace-input',
          `grace-input--${inputSize}`,
          `${fullWidth ? `grace-input--full` : ''}`,
        ].join(' ')}
        type={type}
        {...props}
      />

      {!!buttonLabel && (
        <Button size={inputSize} variant="info" label={buttonLabel} />
      )}
    </div>
  );
};

export default Input;
