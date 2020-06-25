import styled from 'styled-components';
import { shade } from 'polished';

export const Nav = styled.nav`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--secondary-font);
`

export const Brand = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

export const BrandTitle = styled.span`
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
    font-size: 1.125rem;
    margin-left: 8px;
`

export const BrandImage = styled.img`
    width: 48px;
    object-fit: contain;
`

export const NavOptions = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    & svg {
        font-size: 1.4rem;
        color: ${props => shade(0.15, props.theme.colors.default)};

        cursor: pointer;
        transition: all linear 0.2s;

        &:hover {
            color: ${props => shade(0.3, props.theme.colors.default)};
        }
    }
`

export const UserArea = styled.div`
    margin: 0 32px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all linear 0.2s;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 24px;

    & span {
        color: ${props => props.theme.colors.secondary};
        font-weight: 600;
        font-size: 1rem;
    }

    & p {
        color: ${props => props.theme.colors.text};
        font-weight: 400;
        font-size: 0.750rem;
    }
`

export const UserAvatar = styled.img`
    border: 3px solid ${props => props.theme.colors.primary};
    width: 54px;
    height: 54px;
    border-radius: 50%;
    object-fit: contain;
`
