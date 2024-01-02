import styled from "styled-components";


export const Form = styled.form`
    margin:37px 34px 0;
    
    div:nth-child(3){
        margin-bottom: 8px;
    }
    
    button{
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSize.xlarge};
    color: ${(props) => props.theme.colors.maincolor};

    text-align: center;
    margin-bottom: 4px;
`;