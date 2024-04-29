import { useNavigate } from 'react-router-dom';
import { User } from "../../models/user";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Button, TextField } from '@mui/material';


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
                    <TextField id="loginInput" label="ЛОГИН" variant="filled" value={username} onChange={handleChange} />
                </div>
                <div>
                    <TextField id="passwordInput" type="password" label="ПАРОЛЬ" variant="filled" />
                </div>
                <Button variant="contained" onClick={onClick}>Войти</Button>
            </div>
        </>
    );
};

export default Login;