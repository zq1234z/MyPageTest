import styled from "styled-components";

export const InputContainer=styled.div`
  display: felx;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Label = styled.div`
  font-size: ${(props)=>props.theme.fontSize.small};
  color:${(props)=>props.theme.colors.textColor};
`;

export const InputField = styled.input`
  margin-top: 13px;
  padding: 0 5px 5px 0;
  border-bottom:1px solid ${(props)=>props.theme.colors.mainColor};
  outline: none;

  &:focus {
    border-bottom-color:${(props)=>props.theme.colors.textColor}
  };

  &::placeholder{
    color:${(props)=>props.theme.colors.placHolderColor};
    font-size: ${(props)=>props.theme.fontSize.small};
  }
`;