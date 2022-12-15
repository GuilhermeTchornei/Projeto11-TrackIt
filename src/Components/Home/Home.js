import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../Assets/HomeIcon.png";
import { HomeStyle } from "./Styles";

export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    function Login(event) {
        event.preventDefault();

        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email, password })
            .then(response => {
                console.log(response);
                setLoading(false);
            })
            .catch(response => {
                alert(response.response.data.message);
                setLoading(false);
            });
    }


    return (
        <HomeStyle>
            <img src={homeIcon} />
            <form onSubmit={Login}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required disabled={loading} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required disabled={loading} />
                <button type="submit" disabled={loading}>Entrar</button>
            </form>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </HomeStyle>
    );
}