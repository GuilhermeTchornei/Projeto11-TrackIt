import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../Assets/HomeIcon.png";
import { HomeStyle } from "./Styles";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);


    function Login(event) {
        event.preventDefault();

        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { email, name, image, password })
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
            <form onSubmit={Login} disabled={loading}>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required disabled={loading} />
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required disabled={loading} />
                <input type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required disabled={loading} />
                <button type="submit" disabled={loading}>Cadastrar</button>
            </form>
            <Link to="/">Já tem uma conta? Faça login!</Link>
        </HomeStyle>
    );
}