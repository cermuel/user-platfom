import React from "react";

type Input = {
  labelText: string;
  inputType: string;
  inputId: string;
  placeholder?: string;
  onChange?: any;
};

const InputContainer = ({
  labelText,
  inputType,
  inputId,
  placeholder,
  onChange,
}: Input) => {
  return (
    <div className="input-container">
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type={inputType}
        id={inputId}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputContainer;
