import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Home = () => {
    const css = {
        margin: '10px',
        padding: '10px',
        border: '5px solid purple'
    };

    let { id } = useParams();

    const user = useSelector((gs:any) => gs.user);
    
    if (!id) id = user.username;

    let message = id ? `Главная (Пользователь: ${id})` : 'Главная';

    return <div style={css}>{message}</div>;
};

export default Home;