import { useContext } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import ProgressContext from "../Contexts/ProgressContext";
import { FooterStyle } from "./Styles";

export default function Footer() {
    const {progress} = useContext(ProgressContext);
    return (
        <FooterStyle data-test="menu">
            <Link to="/habitos" data-test="habit-link">Hábitos</Link>
            <div data-test="today-link">
                <Link to="/hoje"><CircularProgressbar value={progress} text="Hoje" background backgroundPadding={6}/></Link>
            </div>
            <Link to="/historico" data-test="history-link">Histórico</Link>
        </FooterStyle>
    );
}