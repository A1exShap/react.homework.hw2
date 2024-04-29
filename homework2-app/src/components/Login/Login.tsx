import { useNavigate } from 'react-router-dom';
import { User } from "../../models/user";
import { useDispatch } from "react-redux";
import { useState } from 'react';

const css = {
    margin: '10px',
    padding:'10px',
    border: '5px solid blue'
};

const Login = () => {
    const [username, setUsername] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const onClick = () => {
        if (username.trim() === '') {
            alert('Введите логин');
            return;
        }

        const newUser: User = {
            username: username,
            firstName: '',
            email: ''
        };

        dispatch({
            type: '[USER_STATE] USER_SET',
            payload: newUser,
        });

        navigate(`/home/${newUser.username}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    return (
        <>
            <div style={css}>
                <div>
                    <label>Логин:</label>
                    <input
                        type="text"
                        placeholder="ЛОГИН"
                        id="loginInput"
                        value={username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" placeholder="ПАРОЛЬ" id="passwordInput" />
                </div>
                <button type="button" onClick={onClick}>Войти</button>
            </div>
        </>
    );
};

export default Login;