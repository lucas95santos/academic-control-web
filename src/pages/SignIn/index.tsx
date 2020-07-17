import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { SignInContainer, SignInArea, SignInForm } from './styles';
// images
import logoSvg from '../../assets/notebook.svg';

const SignIn: React.FunctionComponent = () => {
    const login = () => {
        localStorage.setItem('ac-signin', JSON.stringify(true));
        document.location.reload(true);
    }

    return (
        <SignInContainer>
            <div id="logo">
                <img src={logoSvg} alt="" />
                <h1>Academic Control</h1>
            </div>
            <SignInArea>
                <SignInForm autoComplete="off" onSubmit={e => e.preventDefault()}>
                    <div className="form-control">
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" />
                    </div>

                    <Link to="/reset">Esqueci a senha</Link>

                    <button onClick={() => login()}>Entrar</button>
                </SignInForm>
                <div className="form-footer">
                    <p>Não possui conta? <Link to="/cadastro">Crie uma por aqui</Link></p>
                </div>
            </SignInArea>
        </SignInContainer>
    );
}

export default SignIn;
