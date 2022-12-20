import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import { Caption, DaysSequence, HabitStyle, Main, Title } from "./Styles";
import CheckIcon from "../../Assets/Check.png"
import UncheckIcon from "../../Assets/Uncheck.png"
import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/UserContext";
import dayjs from "dayjs";
import axios from "axios";
import ProgressContext from "../Contexts/ProgressContext";

export default function Today() {
    const { user } = useContext(UserContext);
    const [render, setRender] = useState(false);
    const [todayHabits, setTodayHabits] = useState([]);
    const { progress, setProgress } = useContext(ProgressContext);
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(response => {
                setTodayHabits(response.data);
            })
            .catch(response => console.log(response));
    }, [render]);


    useEffect(() => {
        if (todayHabits.length > 0)
        {
            setProgress((todayHabits.filter(h => { if (h.done) return h }).length / todayHabits.length) * 100);
        }
        else setProgress(0);
    }, [todayHabits]);


    function CheckHabit(id) {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config)
            .then(() => {
                setTodayHabits(todayHabits.map(h => {
                    if (h.id === id)
                    {
                        h.done = true;
                        setRender(!render);
                    }
                    return h;
                }))
            })
            .catch(response => console.log(response));
    }

    function UncheckHabit(id) {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)
            .then(() => {
                setTodayHabits(todayHabits.map(h => {
                    if (h.id === id)
                    {
                        h.done = false;
                        setRender(!render);
                    }
                    return h;
                }))
            })
            .catch(response => console.log(response));
    }


    return (
        <>
            <Header image={user.image} />
            <Main>
                <Title>
                    <p>
                        <Date />
                        {progress === 0 ?
                            <Caption data-test="today-counter" >Nenhum hábito concluído ainda</Caption> :
                            <Caption data-test="today-counter"  className="green">{progress.toFixed(0)}% dos hábitos concluídos</Caption>}
                    </p>
                </Title>
                {todayHabits.map(h => <Habit key={h.id} habit={h} CheckHabit={CheckHabit} UncheckHabit={UncheckHabit} />)}
            </Main>
            <Footer />
        </>
    );
}

function Habit({ habit, CheckHabit, UncheckHabit }) {
    return (
        <HabitStyle data-test="today-habit-container">
            <DaysSequence>
                <h1 data-test="today-habit-name">{habit.name}</h1>
                <p data-test="today-habit-sequence">Sequência atual: <span className={habit.done ? "green" : ""}>{habit.currentSequence} dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span className={habit.currentSequence >= habit.highestSequence ? "green" : ""}>{habit.highestSequence} dias</span></p>
            </DaysSequence>
            {habit.done ? <img data-test="today-habit-check-btn" src={CheckIcon} onClick={() => UncheckHabit(habit.id)} /> :
                <img data-test="today-habit-check-btn" src={UncheckIcon} onClick={() => CheckHabit(habit.id)} />}
        </HabitStyle>
    );
}

function Date() {
    require('dayjs/locale/pt-br');
    dayjs.locale('pt-br');
    let weekDay = dayjs().format('dddd');

    return (
        <span data-test="today">{weekDay.charAt(0).toUpperCase() + weekDay.slice(1).split('-')[0]}, {dayjs().format('DD/MM')}</span>
    );
}