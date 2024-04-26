const Login = () => {

    const css = {
        margin: '10px',
        padding:'10px',
        border: '5px solid blue'
    };

    return (
    <>
        <div style={css}>
            <div>
                <label>Логин:</label>
                <input type="text" placeholder="ЛОГИН"  id="loginInput"/>
            </div>
            <div>
                <label>Пароль:</label>
                <input type="password" placeholder="ПАРОЛЬ"  id="passwordInput"/>
            </div>
            <button type="submit">Войти</button>
        </div>
    </>);
};

export default Login;