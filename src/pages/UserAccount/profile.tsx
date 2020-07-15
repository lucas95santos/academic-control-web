import React from 'react';
// styles
import { UserAccountInfoArea, UserAccountForm, UserAvatar, InLine, InputControl } from './styles';
// images
import userSvg from '../../assets/user.svg';

const Profile: React.FunctionComponent = () => {
    return (
        <UserAccountInfoArea>
            <h1>Meu perfil</h1>

            <UserAccountForm onSubmit={e => e.preventDefault()} autoComplete="off">
                <UserAvatar title="Selecionar imagem">
                    <label htmlFor="avatar">
                        <img src={userSvg} alt=""/>

                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                        />
                    </label>

                    <span>John Doe</span>
                </UserAvatar>
                <InLine>
                    <InputControl>
                        <label htmlFor="name">Nome completo</label>
                        <input type="text" id="name" />
                    </InputControl>

                    <InputControl marginLeft={16}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email" />
                    </InputControl>
                </InLine>

                <InLine>
                    <InputControl>
                        <label htmlFor="college">Universidade</label>
                        <input type="text" id="college" />
                    </InputControl>

                    <InputControl marginLeft={16}>
                        <label htmlFor="course">Curso</label>
                        <input type="text" id="course" />
                    </InputControl>
                </InLine>

                <InLine>
                    <InputControl>
                        <label htmlFor="country">País</label>
                        <input type="text" id="country" />
                    </InputControl>

                    <InputControl marginLeft={16} flex={0.2}>
                        <label htmlFor="uf">UF</label>
                        <select name="uf" id="uf">
                            <option value="ms">MS</option>
                            <option value="rj">RJ</option>
                            <option value="sp">SP</option>
                        </select>
                    </InputControl>

                    <InputControl marginLeft={16}>
                        <label htmlFor="city">Cidade</label>
                        <input type="text" id="city" />
                    </InputControl>
                </InLine>

                <button type="submit">Salvar</button>
            </UserAccountForm>
        </UserAccountInfoArea>
    );
}

export default Profile;
