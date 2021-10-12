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
  type = 'text',
  inputSize = 'medium',
  className = '',
  buttonLabel,
  fullWidth,
  ...props
}: IInputProps): ReactElement => {
  return (
    <>
      {!!buttonLabel ? (
        <div className="grace-input-group">
          <input
            className={[
              className ? '' : '',
              'grace-input',
              `grace-input--${inputSize}`,
              `${fullWidth ? `grace-input--full` : ''}`,
            ].join(' ')}
            type={type}
            {...props}
          />

          <Button size={inputSize} variant="info" label={buttonLabel} />
        </div>
      ) : (
        <input
          className={[
            className ? '' : '',
            'grace-input',
            `grace-input--${inputSize}`,
            `${fullWidth ? `grace-input--full` : ''}`,
          ].join(' ')}
          type={type}
          {...props}
        />
      )}
    </>
  );
};

export default Input;
