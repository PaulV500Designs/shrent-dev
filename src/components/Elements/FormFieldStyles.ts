import { css } from 'styled-components/macro';
import { styleConstants } from '@/styles/styleConstants';

type FormFieldStylesProps = {
  error?: boolean;
  minHeight?: string;
};

const FormFieldStyles = css<FormFieldStylesProps>`
  display: block;
  width: 100%;
  outline: 0;
  padding: 12px 10px;
  color: inherit;
  background-color: ${styleConstants.color.white};
  border-radius: ${styleConstants.radius.small};
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) =>
    p.error ? styleConstants.color.tones.red : styleConstants.divider};

  &::placeholder {
    color: ${styleConstants.color.gray3};
  }
  &::-webkit-input-placeholder {
    color: ${styleConstants.color.gray3};
  }
  &::-moz-placeholder {
    color: ${styleConstants.color.gray3};
  }
  &:-ms-input-placeholder {
    color: ${styleConstants.color.gray3};
  }
  &:-moz-placeholder {
    color: ${styleConstants.color.gray3};
  }

  &[disabled] {
    border-color: ${styleConstants.color.tones.mute};
    background-color: ${styleConstants.color.tones.mute};

    &::placeholder {
      color: ${styleConstants.color.gray3};
    }
    &::-webkit-input-placeholder {
      color: ${styleConstants.color.gray3};
    }
    &::-moz-placeholder {
      color: ${styleConstants.color.gray3};
    }
    &:-ms-input-placeholder {
      color: ${styleConstants.color.gray3};
    }
    &:-moz-placeholder {
      color: ${styleConstants.color.gray3};
    }
  }

  &[disabled]:focus,
  &:focus {
    box-shadow: ${styleConstants.focus};
  }
`;

export default FormFieldStyles;
