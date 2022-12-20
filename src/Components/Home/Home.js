import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../../Assets/HomeIcon.png";
import UserContext from "../Contexts/UserContext";
import { HomeStyle } from "./Styles";
import { ThreeDots } from 'react-loader-spinner';

export default function Home() {
    const { setUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function Login(event) {
        event.preventDefault();

        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", { email, password })
            .then(response => {
                setUser(response.data);
                setLoading(false);
                navigate("/hoje");
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
                <input data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required disabled={loading} />
                <input data-test="password-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required disabled={loading} />
                <button data-test="login-btn" type="submit" disabled={loading}>
                    {!loading ? <>Entrar</> :
                        <ThreeDots
                        height="13"
                        width="249"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                         />
                    }
                </button>
            </form>
            <Link to="/cadastro" data-test="signup-link" >Não tem uma conta? Cadastre-se!</Link>
        </HomeStyle>
    );
}