import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { Caption, DaysSequence, HabitStyle, Main, Title } from "./Styles";
import CheckIcon from "../../Assets/Check.png"
import UncheckIcon from "../../Assets/Uncheck.png"

export default function Today() {

    return (
        <>
            <Header image="https://miro.medium.com/max/1200/1*JivGm8AG2XgC9NO64LwguQ.png" />
            <Main>
                <Title>
                    <p>
                        Segunda, 17/05
                        <Caption>Nenhum hábito concluído ainda</Caption>
                    </p>
                </Title>
                <Habit />
                <Habit />
            </Main>
            <Footer />
        </>
    );
}

function Habit() {
    return (
        <HabitStyle>
            <DaysSequence>
                <h1>Ler 1 capitulo de livro</h1>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </DaysSequence>
            <img src={CheckIcon} />
        </HabitStyle>
    );
}