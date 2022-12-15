import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 18px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, .15);

    font-family: 'playball';
    font-size: 40px;
    color: white;

    .image{
        width: 51px;
        height: 51px;
        border-radius: 98px;
        background-image: url(${props => props.image})
    }

`;

export const Main = styled.main`

`;

export const Footer = styled.footer`

`;
