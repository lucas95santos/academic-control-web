import React from 'react';
import { useHistory } from 'react-router-dom';
// styles
import { ResetPasswordContainer, ResetPasswordArea, ResetPasswordForm } from './styles';
// images
import logoSvg from '../../assets/notebook.svg';

const ResetPassword: React.FunctionComponent = () => {
    const [resetRequested, setResetRequested] = React.useState(false);
    const history = useHistory();

    const goToSignIn = () => {
        history.push('/');
    }

    return (
        <ResetPasswordContainer>
            <div id="logo">
                <img src={logoSvg} alt="Logo" />
                <h1>Academic Control</h1>
            </div>
            <ResetPasswordArea>
                {!resetRequested && (
                    <ResetPasswordForm>
                        <div className="form-control">
                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email" />
                        </div>

                        <button onClick={() => setResetRequested(true)}>Solicitar reset</button>
                    </ResetPasswordForm>
                )}
                {resetRequested && (
                    <>
                        <p>A solicitação de reset de senha foi realizada com sucesso!</p>
                        <span>Em breve você receberá um e-mail com as instruções para definir uma nova senha.</span>

                        <button className="login" onClick={() => goToSignIn()}>Tentar entrar novamente</button>
                    </>
                )}
            </ResetPasswordArea>
        </ResetPasswordContainer>
    );
}

export default ResetPassword;
