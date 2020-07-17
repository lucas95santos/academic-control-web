import React from 'react';
// components
import Profile from './profile';
import ChangePassword from './changePassword';
// styles
import {
    UserAccountContainer,
    UserAccountContent,
    UserAccountContentMenu,
    UserAccountContentInfo
} from './styles';
// icons
import { MdPowerSettingsNew } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { BsShieldLock } from 'react-icons/bs';

const UserAccount: React.FunctionComponent = () => {
    const [menuItemActive, setMenuItemActive] = React.useState(0);

    const renderInfo = () => {
        if (menuItemActive === 0) {
            return <Profile />;
        } else {
            return <ChangePassword />
        }
    }

    const logout = () => {
        localStorage.setItem('ac-signin', JSON.stringify(false));
        document.location.reload(true);
    }

    return (
        <UserAccountContainer>
            <UserAccountContent>
                <UserAccountContentMenu
                    animationName="SlideInRight"
                    duration="1.5s"
                >
                    <ul>
                        <li
                            className={`${menuItemActive === 0 ? 'active' : ''}`}
                            onClick={() => setMenuItemActive(0)}
                        >
                            Meu Perfil
                            <FaRegUser />
                        </li>
                        <li
                            className={`${menuItemActive === 1 ? 'active' : ''}`}
                            onClick={() => setMenuItemActive(1)}
                        >
                            Alterar senha
                            <BsShieldLock />
                        </li>
                        <li onClick={() => logout()}>
                            Sair
                            <MdPowerSettingsNew />
                        </li>
                    </ul>
                </UserAccountContentMenu>
                <UserAccountContentInfo
                    animationName="SlideInLeft"
                    duration="1.5s"
                >
                    {renderInfo()}
                </UserAccountContentInfo>
            </UserAccountContent>
        </UserAccountContainer>
    );
}

export default UserAccount;
