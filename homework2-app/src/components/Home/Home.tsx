import { useParams } from "react-router-dom";

const Home = () => {

    const css = {
        margin: '10px',
        padding:'10px',
        border: '5px solid purple'
    };

    const qp = useParams();

    let message = qp?.id? `Главная (Пользователь ${qp.id})` : 'Главная';

    return <div style={css}>{message}</div>
};

export default Home;