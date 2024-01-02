import { Children } from "react";
import styled from "styled-components";

const BasicContoiner = styled.div`
    position: relative;
    margin: 0 auto;
    //최대 너비값
    max-width: 390px;
    //최소 높이값 - vh: 내가 보고 있는 창 크기
    min-height: 100vh;
    height: 100%;
    box-shadow: rgb(0 0 0 /14%)0px 0px 7px;
`;

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const BasicLayout = ( {Children} ) => {
    return(
        <BasicContoiner>
            <Screen>
                {Children}
            </Screen>
        </BasicContoiner>
    );
};

<div class = "BasicContoiner">
    <div class="Screen">
        {Children}
    </div>
</div>