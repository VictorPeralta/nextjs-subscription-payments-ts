import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import cn from 'classnames';
import s from './Input.module.css';

interface Props extends InputHTMLAttributes<any> {}

const Input = (props: Props) => {
  const { className, children, onChange, ...rest } = props;

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
    return null;
  };

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};

export default Input;
