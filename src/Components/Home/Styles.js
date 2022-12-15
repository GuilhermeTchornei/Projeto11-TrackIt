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