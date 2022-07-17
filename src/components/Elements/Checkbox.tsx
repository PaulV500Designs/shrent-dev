import { StyleConstants } from 'core/styles/StyleConstants';
import * as React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  margin: 10px 0;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  label {
    font-size: 14px;
    font-weight: 400;
    color: ${StyleConstants.color.gray};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .check {
      border-color: ${StyleConstants.color.tones.blue};
      background-color: ${StyleConstants.color.tones.blue};

      &:after {
        display: block;
      }
    }

    &:disabled ~ .check {
      background-color: ${StyleConstants.color.gray};
    }
  }

  .check {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-width: 1px;
    border-style: solid;
    border-color: ${StyleConstants.color.lightgray2};
    border-radius: ${StyleConstants.radius.small};
    background-color: ${StyleConstants.color.white};
    margin-right: 8px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 7px;
      top: 4px;
      width: 2px;
      height: 6px;
      border: solid ${StyleConstants.color.white};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

/**
 * Checkbox
 * NOTE: all attributes must be a valid input attributes as this will be just passed down to the input element
 */
export default function CheckboxComponent({ text, ...rest }: CheckBoxProps) {
  return (
    <Wrapper>
      <input type="checkbox" {...rest} />
      <span className="check" />
      <label>{text}</label>
    </Wrapper>
  );
}
