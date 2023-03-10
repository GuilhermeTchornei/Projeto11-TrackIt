import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homeIcon from "../../Assets/HomeIcon.png";
import { HomeStyle } from "./Styles";
import { ThreeDots } from 'react-loader-spinner';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function Login(event) {
        event.preventDefault();

        setLoading(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", { email, name, image, password })
            .then(response => {
                navigate("/");
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
                <input data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" required disabled={loading} />
                <input data-test="password-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required disabled={loading} />
                <input data-test="user-name-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required disabled={loading} />
                <input data-test="user-image-input" type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required disabled={loading} />
                <button data-test="signup-btn" type="submit" disabled={loading}>
                {!loading ? <>Cadastrar</> :
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
            <Link to="/" data-test="login-link" >J?? tem uma conta? Fa??a login!</Link>
        </HomeStyle>
    );
}