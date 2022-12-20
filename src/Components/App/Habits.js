import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import UserContext from "../Contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import { Caption, HabitStyle, Main, NewHabitButtons, Title, WeeksDays } from "./Styles";
import { ThreeDots } from 'react-loader-spinner';

export default function Habits() {
    const { user } = useContext(UserContext);
    const [habitsList, setHabitsList] = useState([]);
    const [newHabit, setNewHabit] = useState(false);
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    };

    useEffect(() => {
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then(response => {
                setHabitsList(response.data);
            })
            .catch(response => console.log(response));
    }, []);

    console.log(habitsList);
    return (
        <>
            <Header image={user.image} />
            <Main>
                <Title>
                    <p>Meus hábitos</p>
                    <button onClick={() => setNewHabit(true)} data-test="habit-create-btn">+</button>
                </Title>
                {newHabit && <NewHabit weekDays={weekDays} setNewHabit={setNewHabit} habitsList={habitsList} setHabitsList={setHabitsList} config={config} />}
                {habitsList.map((h, i) => <Habit key={i} id={h.id} title={h.name} days={h.days} weekDays={weekDays} habitsList={habitsList} setHabitsList={setHabitsList} config={config} />)}
                {habitsList.length === 0 &&
                    <Caption>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Caption>}
            </Main>
            <Footer />
        </>
    );
}


function Habit({ id, title, days, weekDays, habitsList, setHabitsList, config }) {
    function DeleteHabit() {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then(() => {
                setHabitsList(habitsList.filter(h => {
                    if (h.id !== id) return h;
                }))
            })
            .catch(response => console.log(response));
    }

    return (
        <HabitStyle direction="Column" data-test="habit-container">
            <h1 data-test="habit-name">{title}</h1>
            <WeeksDays>
                {weekDays.map((d, i) => <button key={i} className={days.includes(i) ? "selected" : ''} disabled={true} data-test="habit-day">{d}</button>)}
            </WeeksDays>

            <ion-icon name="trash-outline" onClick={() => {
                if (window.confirm("Deseja reamente excluir?")) DeleteHabit();
                }
            } data-test="habit-delete-btn" ></ion-icon>
        </HabitStyle>
    );
}

function NewHabit({weekDays, setNewHabit, habitsList, setHabitsList, config}) {
    const [title, setTitle] = useState("");
    const [days, setDays] = useState([]);
    const [loading, setLoading] = useState(false);

    function SaveNewHabit() {
        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { name: title, days }, config)
            .then((response) => {
                setLoading(false);
                setNewHabit(false);
                setHabitsList([...habitsList, response.data]);
            })
            .catch(response => {
                setLoading(false);
                alert(response.data.message);
            });
    }

    return (
        <HabitStyle direction="Column" data-test="habit-create-container">
            <input data-test="habit-name-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nome do hábito" disabled={loading} />
            <WeeksDays>
                {weekDays.map((d, i) => <button key={i} className={days.includes(i) ? "selected" : ''} onClick={() => setDays([...days, i])} disabled={loading} data-test="habit-day">{d}</button>)}
            </WeeksDays>
            <NewHabitButtons>
                <button data-test="habit-create-cancel-btn" className="cancel" onClick={() => setNewHabit(false)}>Cancelar</button>
                <button data-test="habit-create-save-btn" className="save" onClick={() => SaveNewHabit()}>
                {!loading ? <>Salvar</> :
                        <ThreeDots
                        height="11"
                        width="84"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                         />
                    }
                </button>
            </NewHabitButtons>
        </HabitStyle>
    );
}