import { CircularProgressbar } from "react-circular-progressbar";
import { FooterStyle } from "./Styles";

export default function Footer() {
    return (
        <FooterStyle>
            <p>Hábitos</p>
            <div>
                <CircularProgressbar value={66} text="Hoje" background backgroundPadding={6}/>
            </div>
            <p>Histórico</p>
        </FooterStyle>
    );
}