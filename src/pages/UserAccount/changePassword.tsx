import React from 'react';
// styles
import { UserAccountInfoArea, UserAccountForm, InputControl } from './styles';

const ChangePassword: React.FunctionComponent = () => {
    return (
        <UserAccountInfoArea>
            <h1>Alterar senha</h1>

            <UserAccountForm maxWidth={25} onSubmit={e => e.preventDefault()} autoComplete="off">
                <InputControl>
                    <label htmlFor="current-password">Senha atual</label>
                    <input type="password" id="current-password" />
                </InputControl>

                <InputControl>
                    <label htmlFor="new-password">Nova senha</label>
                    <input type="password" id="new-password" />
                </InputControl>

                <InputControl>
                    <label htmlFor="confirm-password">Confirme a nova senha</label>
                    <input type="password" id="confirm-password" />
                </InputControl>

                <button type="submit">Alterar</button>
            </UserAccountForm>
        </UserAccountInfoArea>
    );
}

export default ChangePassword;
