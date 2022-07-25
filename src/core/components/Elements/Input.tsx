import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { StyleConstants } from 'core/styles/StyleConstants';
import PhoneNumberInput from 'react-phone-number-input/input'

import FormFieldStyles from './FormFieldStyles';
import ErrorMsg from './ErrorMsg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Valid react element as icon
   * @default 'none'
   */
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /**
   * Icon position, if icon is defined this will determine the position of icon
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  /**
   * Icon color
   * @default 'primary'
   */
  iconColor?: 'primary' | 'secondary';
  /**
   * Function callback when icon is clicked
   * @returns event
   */
  onIconClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * String prefix
   * @default ''
   */
  prefix?: string;
  /**
   * Show error styles
   * @default false
   */
  error?: boolean;
  /**
   * Show the error msg
   * @default ''
   */
  errorMsg?: string;
  /**
   * Render the input with full width
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Function onChange for PhoneInput
   * @returns event
   */
  onChange?: any;
  /**
   * Render Phone Number Input
   * @returns Phone Number Input Element
   */
  isPhoneNumber?: boolean;
  /**
   * Show value for the Input element
   * @returns Phone Number Input Element
   */
  value?: string;
  /**
   * Show border bottom only
   */
  borderBottomOnly?: boolean;
}

const InputWrapper = styled.div<{
  hasicon?: boolean;
  iconcolor?: 'primary' | 'secondary';
  full?: boolean;
}>`
  position: relative;
  display: ${p => (p.full ? 'block' : 'inline-block')};
  width: ${p => (p.full ? '100%' : 'auto')};

  .input-pre {
    position: absolute;
    top: 12px;
    /* transform: translateY(-50%); */
    left: ${p => (p.hasicon ? '50px' : '10px')};
    padding: 0 2px;
    opacity: 0.7;
  }

  .input-icon {
    position: absolute;
    top: 4px;
    width: 38px;
    height: 38px;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding: 10px;
    opacity: ${p => (p.iconcolor === 'primary' ? '1' : '0.6')};

    &.left {
      left: 3px;
    }
    &.right {
      right: 3px;
    }
  }

  button.input-icon {
    border-radius: 8px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    outline: 0;

    &:focus-visible {
      box-shadow: ${StyleConstants.focus};
    }

    &:hover {
      background-color: grey;
    }
  }
`;

const InputStyle = styled.input<{
  error?: boolean;
  paddingleft?: number;
  paddingright?: number;
  borderBottomOnly?: boolean;
}>`
  ${FormFieldStyles};
  ${p => p.paddingleft && `padding-left: ${p.paddingleft + 10}px`};
  ${p => p.paddingright && `padding-right: ${p.paddingright + 10}px`};
  flex-grow: 1;

  ${({ borderBottomOnly }) =>
		borderBottomOnly &&
		css`
      border: 0;
      border-bottom: 1px solid  ${StyleConstants.color.black};
      border-radius: 0;
		`}
`;

/**
 * Input Component
 * @typedef InputProps
 */
export default function Input({
  icon,
  iconPosition,
  iconColor,
  onIconClick,
  prefix,
  error,
  errorMsg,
  fullWidth,
  onChange,
  isPhoneNumber,
  borderBottomOnly = false,
  value,
  ...rest
}: InputProps) {
  const prefixRef = React.useRef<any>(null);
  const [padLeft, setPadLeft] = React.useState(0);
  const [padRight, setPadRight] = React.useState(0);

  React.useEffect(() => {
    let left = 0;
    let right = 0;
    if (prefix && prefixRef && prefixRef.current) {
      left += prefixRef?.current.offsetWidth || 0;
    }

    if (icon && iconPosition === 'left') {
      left += 38;
    }

    if (icon && iconPosition === 'right') {
      right += 38;
    }

    setPadLeft(left);
    setPadRight(right);
  }, [prefix, prefixRef, icon, iconPosition]);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e && e.preventDefault) e.preventDefault();
    e.currentTarget.blur();

    if (onIconClick) {
      onIconClick(e);
    }
  };

  let iconComponent;
  if (React.isValidElement(icon) && onIconClick) {
    iconComponent = (
      <button
        type="button"
        onClick={onClick}
        className={`input-icon ${iconPosition}`}
        tabIndex={-1}
      >
        {icon}
      </button>
    );
  }

  if (React.isValidElement(icon) && !onIconClick) {
    iconComponent = (
      <span className={`input-icon ${iconPosition}`}>{icon}</span>
    );
  }

  return (
    <InputWrapper
      hasicon={iconComponent || undefined}
      iconcolor={iconColor || 'primary'}
      full={fullWidth || undefined}
    >
      {prefix && (
        <span ref={prefixRef} className="input-pre">
          {prefix}
        </span>
      )}
      {isPhoneNumber ? (
        <PhoneNumberInput
          country="US"
          international
          withCountryCallingCode
          inputComponent={InputStyle}
          onChange={onChange}
          value={value}
        />
      ) : (
          <InputStyle
            {...rest}
            error={error || undefined}
            paddingleft={padLeft}
            paddingright={padRight}
            value={value}
            onChange={onChange}
            borderBottomOnly={borderBottomOnly}
          />
        )}
      {React.isValidElement(icon) && iconComponent}
      {error && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </InputWrapper>
  );
}
