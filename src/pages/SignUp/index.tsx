import React from 'react';
import { Link } from 'react-router-dom';
// styles
import { SignUpContainer, SignUpArea, SignUpForm } from './styles';
// images
import logoSvg from '../../assets/notebook.svg';

const SignUp: React.FunctionComponent = () => {
    return (
        <SignUpContainer>
            <div id="logo">
                <img src={logoSvg} alt="" />
                <h1>Academic Control</h1>
            </div>
            <SignUpArea>
                <SignUpForm autoComplete="off" onSubmit={e => e.preventDefault()}>
                    <div className="inline-inputs">
                        <div className="form-control">
                            <label htmlFor="name">Nome completo</label>
                            <input type="text" id="name" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" />
                        </div>
                    </div>

                    <div className="inline-inputs">
                        <div className="form-control">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="confirm_password">Confirme a senha</label>
                            <input type="password" id="confirm_password" />
                        </div>
                    </div>

                    <button>Cadastrar</button>
                </SignUpForm>
                <div className="form-footer">
                    <p>Já possui conta? <Link to="/">Entre por aqui</Link></p>
                </div>
            </SignUpArea>
        </SignUpContainer>
    );
}

export default SignUp;
