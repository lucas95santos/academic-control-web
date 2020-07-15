import React from 'react';
import Switch from 'react-switch';
// theme
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
// icons
import { MdSettings, MdPowerSettingsNew, MdInvertColors } from 'react-icons/md';
// styles
import {
    MenuCollapseContainer,
    MenuCollapseItem,
    UserArea,
    UserInfo,
    UserAvatar,
    Triangle
} from './styles';
// images
import sunSvg from '../../assets/sun.svg';
import moonSvg from '../../assets/moon.svg';
import userSvg from '../../assets/user.svg';

interface MenuCollapseProps {
    open: boolean;
    setMenuOpen: Function;
    toogleTheme: any;
    goTo: Function;
}

interface SVGProps {
    icon: any;
    height: number;
}

interface Position {
    initialX: number;
    finalX: number;
    initialY: number;
    finalY: number;
}

interface ClickPosition {
    x: number;
    y: number;
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

const MenuCollapse: React.FunctionComponent<MenuCollapseProps> = (props) => {
    const { open, setMenuOpen, toogleTheme, goTo } = props;
    const { colors, title } = React.useContext(ThemeContext);

    const goToUserAccount = () => {
        setMenuOpen(false);
        goTo('conta');
    }

    return (
        <MenuCollapseContainer
            style={{
                visibility: open ? 'visible' : 'hidden',
                opacity: open ? 1 : 0
            }}
        >
            <Triangle />
            <UserArea>
                <UserInfo>
                    <span>John Doe</span>
                    <p>johndoe@gmail.com</p>
                </UserInfo>
                <UserAvatar src={userSvg} alt="Avatar" />
            </UserArea>
            <MenuCollapseItem onClick={() => goToUserAccount()}>
                <MdSettings />
                <span>Configurações da conta</span>
            </MenuCollapseItem>
            <MenuCollapseItem separate>
                <div>
                    <MdInvertColors />
                    <span>Mudar tema</span>
                </div>
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
            </MenuCollapseItem>
            <MenuCollapseItem divider>
                <MdPowerSettingsNew />
                <span>Sair</span>
            </MenuCollapseItem>
        </MenuCollapseContainer>
    );
}

export default MenuCollapse;
