import styled from "styled-components";

export const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 68px 36px;

    form{
        margin-top: 32px;
        display: flex;
        flex-direction: column;

        button{
            height: 45px;
            background-color: #52B6FF;
            text-align: center;
            color: white;
            border: none;
            border-radius: 4px;
        }
    }

    a{
        margin-top: 25px;
        font-size: 14px;
        text-align: center;
        color: #52B6FF;
    }
`;