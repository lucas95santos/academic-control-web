import React from 'react';
import Switch from 'react-switch';
// components
import Brand from './Brand';
// styled components
import { Nav, NavOptions, UserArea, UserInfo, UserAvatar } from './styles';
// theme
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
// icons
import { FaBell } from 'react-icons/fa';
// images
import notebookSvg from '../../assets/notebook.svg';
import sunSvg from '../../assets/sun.svg';
import moonSvg from '../../assets/moon.svg';
import userSvg from '../../assets/user.svg';

interface Props {
    toogleTheme: any;
}

interface SVGProps {
    icon: any;
    height: number;
}

const SVGIcon: React.FunctionComponent<SVGProps> = ({ icon, height }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <img
                src={icon}
                alt="Icon"
                style={{
                    maxHeight: height
                }}
            />
        </div>
    );
}

const Header: React.FunctionComponent<Props> = (props) => {
    const { toogleTheme } = props;
    const { colors, title } = React.useContext(ThemeContext);

    return (
        <header>
            <Nav>
                <Brand image={notebookSvg} title="Academic Control" />
                <NavOptions>
                    <FaBell />

                    <UserArea>
                        <UserInfo>
                            <span>John Doe</span>
                            <p>johndoe@gmail.com</p>
                        </UserInfo>
                        <UserAvatar src={userSvg} alt="Avatar" />
                    </UserArea>

                    <span
                        title={title === 'ac-dark-theme' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                    >
                        <Switch
                            onChange={toogleTheme}
                            checked={title === 'ac-dark-theme'}
                            checkedIcon={<SVGIcon icon={moonSvg} height={18} />}
                            uncheckedIcon={<SVGIcon icon={sunSvg} height={23} />}
                            handleDiameter={19}
                            offColor={shade(0.20, colors.background)}
                            onColor={shade(0.20, colors.background)}
                            offHandleColor={colors.primary}
                            onHandleColor={shade(0.35, colors.primary)}
                            activeBoxShadow="none"
                        />
                    </span>
                </NavOptions>
            </Nav>
        </header>
    );
}

export default Header;
