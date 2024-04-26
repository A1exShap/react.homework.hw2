const Register = () => {

    const css = {
        margin: '10px',
        padding:'10px',
        border: '5px solid green'
    };

    return (
        <>
            <div style={css}>
                <div>
                    <label>Логин:</label>
                    <input type="text" placeholder="ЛОГИН"  id="loginInput"/>
                </div>
                <div>
                    <label>Имя:</label>
                    <input type="text" placeholder="ИМЯ"  id="nameInput"/>
                </div>
                <div>
                    <label>Почта:</label>
                    <input type="text" placeholder="ПОЧТА"  id="emailInput"/>
                </div>
                <div>
                    <label>Пароль:</label>
                    <input type="password" placeholder="ПАРОЛЬ"  id="passwordInput"/>
                </div>
                <button type="submit">Регистрация</button>
            </div>
        </>);
};

export default Register;