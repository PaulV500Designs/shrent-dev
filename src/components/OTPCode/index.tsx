import * as React from 'react';
import PinInput from 'react-pin-input';

import { styleConstants } from '@/styles/styleConstants';

interface OTPCodeProps {
  length: number;
  error?: boolean;
  onChange?: (value: string, index: number) => void;
}

function OTPCode(props: OTPCodeProps) {
  return (
    <div style={{ display: 'inline-block' }}>
      <PinInput
        style={{ display: 'grid', gridGap: '10px', gridAutoFlow: 'column' }}
        length={props.length}
        inputStyle={{
          height: '63px',
          width: '50px',
          borderRadius: '3px',
          fontSize: 22,
          fontWeight: 600,
          background: styleConstants.color.gray1,
          borderColor: props.error
            ? styleConstants.color.tones.red
            : styleConstants.color.gray1,
          color: props.error
            ? styleConstants.color.tones.red
            : styleConstants.color.black,
        }}
        inputFocusStyle={{
          borderColor: props.error
            ? styleConstants.color.tones.red
            : styleConstants.color.primaryBlue,
          boxShadow: props.error ? '' : `0 0 0 2px #393cd64c`,
        }}
        onChange={props.onChange}
      />
    </div>
  );
}

OTPCode.defaultProps = {
  length: 4,
};

export default OTPCode;
