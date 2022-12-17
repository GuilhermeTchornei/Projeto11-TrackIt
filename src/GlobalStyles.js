import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    *, .App{
        font-family: 'Lexend Deca', sans-serif;
        box-sizing: border-box;
    }
    input{
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 11px;
        margin-bottom: 6px;

        font-size: 20px;
        color: #666666;
        ::placeholder{
            color: #DBDBDB;
        }
    }
`;

export default GlobalStyles;