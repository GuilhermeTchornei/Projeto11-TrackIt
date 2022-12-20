import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
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
        background-image: url(${props => props.image});
        background-size: cover;
        background-position: center;
    }

`;

export const Main = styled.main`
    height: 100vh;
    padding: 90px 18px;
    background-color: #E5E5E5;
    overflow: scroll;
`;

export const Title = styled.div`
    width: inherit;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 23px;
    color: #126BA5;

    button{
        width: 40px;
        height: 35px;
        padding-bottom: 5px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;


        font-size: 22px;
        color: white;
    }
`;

export const Caption = styled.span`
    font-size: 18px;
    color: #666666;
    margin-top: 5px;
    display: block;
`;

export const HabitStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: space-between;
    padding: 13px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 10px;
    position: relative;

    h1{
        font-size: 20px;
        color: #666666;
        margin-bottom: 10px;
    }

    p{
        font-size: 13px;
        color: #666666;
        margin-bottom: 2px;
    }

    img{
        width: 69px;
        height: 69px;
    }

    ion-icon{
        position: absolute;
        top: 11px;
        right: 10px;
    }
`;

export const DaysSequence = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const WeeksDays = styled.div`
    flex-direction: row !important;


    button{
        width: 30px;
        height: 30px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        color: #DBDBDB;
        background-color: white;
        margin-right: 4px;
    }
    .selected {
        background-color: #D4D4D4;
        color: white;
    }
`;

export const NewHabitButtons = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 28px;
    button{
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        margin-left: 15px;
    }
    .save{
        background-color: #52B6FF;
        color: white;
    }
    .cancel{
        background-color: transparent;
        color: #52B6FF;
    }
`;

export const FooterStyle = styled.footer`
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 20px;

    font-size: 18px;
    color: #52B6FF;

    a{
        text-decoration: none;
        color: #52B6FF;
    }

    div{
        width: 91px;
        height: 100%;
        position: relative;
        text-align: center;

        .CircularProgressbar{
            width: 91px;
            height: 91px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 3;
        }

        .CircularProgressbar-background {
            fill: #52B6FF;
        }
        .CircularProgressbar-text {
            font-size: 18px;
            fill: white;
        }
        .CircularProgressbar-path {
            stroke: white;
        }
        .CircularProgressbar-trail {
            stroke: transparent;
        }
    }
`;
