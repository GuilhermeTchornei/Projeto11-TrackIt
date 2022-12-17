import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Footer from "./Footer";
import Header from "./Header";
import { Caption, HabitStyle, Main, NewHabitButtons, Title, WeeksDays } from "./Styles";

export default function Habits() {

    return (
        <>
            <Header image="https://miro.medium.com/max/1200/1*JivGm8AG2XgC9NO64LwguQ.png" />
            <Main>
                <Title>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </Title>
                <NewHabit />
                <Habit/>
                <Caption>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Caption>

            </Main>
            <Footer />
        </>
    );
}


function Habit() {
    return (
        <HabitStyle direction="Column">
            <h1>Ler 1 caítulo de livro</h1>
            <WeeksDays>
                <button className="selected">D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </WeeksDays>

            <ion-icon name="trash-outline"></ion-icon>
        </HabitStyle>
    );
}

function NewHabit() {

    return (
        <HabitStyle direction="Column">
            <input type="text" placeholder="Nome do hábito" />
            <WeeksDays>
                <button className="selected">D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </WeeksDays>
            <NewHabitButtons>
                <button className="cancel">Cancelar</button>
                <button className="save">Salvar</button>
            </NewHabitButtons>
        </HabitStyle>
    );
}