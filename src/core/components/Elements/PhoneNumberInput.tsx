import React from 'react';
import Input from 'react-phone-number-input/input'

interface PhoneNumberInputProps {
    value?: string;
    onChange?: any;
}

function PhoneNumberInput({
    value,
    onChange,
}: PhoneNumberInputProps) {
    return (
        <Input
            country="US"
            international
            withCountryCallingCode
            value={value}
            onChange={onChange} 
        />
    );
}

export default PhoneNumberInput;
