import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import { Caption, Main, Title } from "./Styles";

export default function Historic() {
    const { user } = useContext(UserContext);
    return (
        <>
            <Header image={user.image} />
            <Main>
                <Title>
                    <p>Histórico</p>
                </Title>
                <Caption>Em breve você poderá ver o histórico dos seus hábitos aqui!</Caption>
            </Main>
            <Footer />
        </>
    );
}