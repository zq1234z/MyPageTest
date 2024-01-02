import React from "react";
import {
  InputContainer,
  Label,
  InputField,
} from "./InputStyle";

export const Input = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  minLength,
  error,
  ...props
}) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        error={error}
        {...props}
      />
    </InputContainer>
  );
};


{/* <div class="InputContainer">
  <label class="Label">각자 이름</label>
  <input class ="InputField" id="" type="" name="" value="" onChange=""></input>
</div> */}