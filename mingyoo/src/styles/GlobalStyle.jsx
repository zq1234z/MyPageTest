import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
    ${reset} // 리셋
// * 모든 속성
    * {
    box-sizing: border-box;
    }

    //inherit 상속
    //overflow-y y축으로 오버플로우가 일어나면 스크롤 되게끔

    body{
        color: inherit;
        font-weight: 500;
        overflow-y:scroll;
    }

    //a태그는 text-decoration : none;을 안해주면 글자 아래에 밑줄이 있음 
    a{
        text-decoration: none; // 꾸밈없이 글자만
        color: inherit;
        cursor: pointer; // 커서 모양 변경
    }

    ol, ul li{
        list-style: none;
    }

    button{
        box-shadow: none;
        border: none;
        //안쪽 여백 삭제-값을 넣어주면 크기(버튼)가 커짐
        padding: 0;
        background-color: inherit;
        color: inherit;
        cursor: pointer;
    }
`;