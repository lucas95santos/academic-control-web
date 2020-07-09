import styled from 'styled-components';

interface MenuCollapseItemProps {
    separate?: boolean;
    divider?: boolean;
}

export const MenuCollapseContainer = styled.div`
    position: relative;
    width: 260px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.card};
    border-radius: 8px;
    box-shadow: var(--card-box-shadow);

    position: absolute;
    top: 80px;
    right: 0;
    z-index: 9999;
    transition: all linear 0.2s;
`

export const MenuCollapseItem = styled.div`
    flex: 1;
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: ${(props: MenuCollapseItemProps) => props.separate ? 'space-between' : 'flex-start'};
    align-items: center;
    padding: calc(var(--gutter) / 2);
    border-top: ${(props: MenuCollapseItemProps) => props.divider ? '1px solid #dddddd' : 'none'};
    transition: background-color linear 0.2s;
    cursor: pointer;

    > div {
        display: flex;
        align-items: center;
    }

    & span {
        color: ${props => props.theme.colors.lightText};
        font-weight: 400;
        font-size: 0.875rem;
        font-family: var(--primary-font);
    }

    & svg {
        color: ${props => props.theme.colors.lightText};
        font-size: 1.3rem;
        margin-right: calc(var(--gutter) / 4);
    }

    &:hover {
        background-color: ${props => props.theme.title === 'ac-light-theme' ? '#f5f5f5' : '#2b2b2b'}
    }
`

export const UserArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(var(--gutter) / 2);
    border-bottom: 1px solid #dddddd;
    font-family: var(--secondary-font);
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

export const Triangle = styled.div`
    position: absolute;
    top: -16px;
    right: 14px;
    width: 0;
    height: 0;
    border-left: 16px solid transparent;
    border-bottom: 16px solid ${props => props.theme.colors.card};
`
