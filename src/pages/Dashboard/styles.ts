import styled from 'styled-components';
// animations
import BaseAnimation, { setAnimation } from '../../styles/animations';

interface CardProps {
    width?: string;
    height: number;
    image?: any;
    animationName?: string;
    isClass?: boolean;
}

interface CardMessageProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;

    /* @media (min-width: ) */

    &:nth-child(1) {
        margin-bottom: var(--gutter);
        padding-bottom: 16px;
        overflow-x: auto;
        overflow-y: hidden;

        ::-webkit-scrollbar {
            height: 6px;
            background-color: ${props => props.theme.colors.default};
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme.colors.primary};
            border-radius: 5px;
        }
    }

    &:last-child {
        @media (max-width: 930px) {
            flex-direction: column;
        }
    }
`

export const Card = styled(BaseAnimation)`
    position: relative;
    min-width: 250px;
    width: ${(props: CardProps) => props.width ? props.width : '100%'};
    height: ${(props: CardProps) => props.height}px;
    background: ${props => props.theme.colors.card};
    border-radius: 8px;
    border-left: 8px solid ${props => props.theme.colors.primary};
    padding: calc(var(--gutter) / 2);
    box-shadow: 0 2px 3px 0 #00000029;
    margin-left: calc(var(--gutter) / 2);
    margin-right: calc(var(--gutter) / 2);

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }

    background-image: url(${(props: CardProps) => props.image});
    background-position: right bottom;
    background-repeat: no-repeat;

    animation-name: ${(props: CardProps) => props.animationName ? setAnimation(props.animationName) : ''};

    @media (max-width: 930px) {
        width: 100%;
        margin: ${props => !props.isClass ? 0 : ''};

        &:last-child {
            margin-top: ${props => !props.isClass ? 'var(--gutter)' : ''};
        }
    }
`

export const CardTitle = styled.span`
    font-family: var(--primary-font);
    font-size: 0.875rem;
    font-weight: 600;
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    transition: filter linear 0.2s;
    cursor: pointer;

    &:hover {
        filter: brightness(80%);
    }
`

export const CardDivider = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 4px;
    background: ${props => props.theme.colors.default};
`

export const CardContent = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
`

export const CardContentItem = styled.div`
    flex: 1;

    & p {
        font-family: var(--primary-font);
        font-size: 0.813rem;
        font-weight: 400;
        color: ${props => props.theme.colors.lightText};
        text-transform: uppercase;
    }

    & span {
        font-family: var(--primary-font);
        font-size: 0.875rem;
        font-weight: 600;
        color: ${props => props.theme.colors.secondary};
        text-transform: uppercase;
        margin-right: 8px;
    }
`

export const CardMessage = styled.div`
    position: absolute;
    bottom: 96px;
    right: 16px;

    & span {
        font-family: var(--primary-font);
        font-size: 0.813rem;
        line-height: 0.6rem;
        color: ${(props: CardMessageProps) => props.color};
        text-transform: none;

        @media (max-width: 1366px) {
            font-size: 0.750rem;
        }
    }
`

export const CardInfo = styled.div`
    position: absolute;
    width: 100px;
    bottom: 16px;
    left: 16px;

    & span {
        font-family: var(--primary-font);
        font-size: 0.7rem;
        line-height: 0.6rem;
        color: ${props => props.theme.colors.lightText}
    }
`

export const AddCard = styled(Card)`
    background: transparent;
    box-shadow: none;
    border: 2px dashed ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AddCardCircle = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px dashed ${props => props.theme.colors.primary};

    display: flex;
    justify-content: center;
    align-items: center;

    & svg {
        font-size: 32px;
        color: ${props => props.theme.colors.primary}
    }

    transition: transform linear 0.2s !important;
    cursor: pointer;

    &:hover {
        transform: scale(1.1) !important;
    }
`
