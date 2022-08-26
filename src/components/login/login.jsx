import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({authService}) => {

    const onLogin = event => {
        authService.login(event.currentTarget.textContent)  //4.authService를 사용 //login함수의 providerName에 event.currenTarger.textContent가 들어가게
        .then(console.log);
    }

    return (
        <section>
            <Header />

            <section>
                <h1>Login</h1>
                <ul>
                    <li><button onClick={onLogin}>Google</button></li>
                    <li><button onClick={onLogin}>Github</button></li>  
                </ul>
            </section>

            <Footer />
        </section>
    );
};

export default Login;