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

interface AddClassProps {
    animationName?: string;
}

interface CardMessageProps {
    color: string;
}

interface InputProps {
    flex?: number;
    marginLeft?: number;
}

export const Container = styled.div`
    width: 100%;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    padding: 0 var(--gutter) var(--gutter);
`;

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
`;

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
`;

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
`;

export const CardDivider = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 4px;
    background: ${props => props.theme.colors.default};
`;

export const CardContent = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
`;

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
`;

export const CardMessage = styled.div`
    position: absolute;
    bottom: 96px;
    right: 16px;

    > span {
        font-family: var(--primary-font);
        font-size: 0.813rem;
        line-height: 0.6rem;
        color: ${(props: CardMessageProps) => props.color};
        text-transform: none;

        @media (max-width: 1366px) {
            font-size: 0.750rem;
        }
    }
`;

export const CardInfo = styled.div`
    position: absolute;
    width: 100px;
    bottom: 16px;
    left: 16px;

    > span {
        font-family: var(--primary-font);
        font-size: 0.7rem;
        line-height: 0.6rem;
        color: ${props => props.theme.colors.lightText}
    }
`;

export const AddClass = styled(BaseAnimation)`
    min-width: 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: calc(var(--gutter) / 2);
    animation-name: ${(props: AddClassProps) => props.animationName ? setAnimation(props.animationName) : ''};
    transition: all linear 0.2s !important;
    cursor: pointer;

    > span {
        font-family: var(--primary-font);
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
        margin-top: calc(var(--gutter) / 8);
    }

    > svg {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.text}
    }


    &:hover {
        filter: brightness(80%);
    }
`;

export const InLine = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 415px) {
        flex-direction: column;
    }
`;

export const InputControl = styled.div`
    width: 100%;
    flex: ${(props: InputProps) => props.flex ? props.flex : 1};
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    margin-left: ${(props: InputProps) => props.marginLeft}px;

    @media (max-width: 415px) {
        margin-left: 0;
    }
`;

export const CheckContainer = styled.div`
    display: flex;
    margin-top: 6px;
    margin-bottom: 16px;

    div {
        height: 100%;
        display: flex;
        align-items: center;

        label {
            margin-left: 8px;
            font-weight: 500;
        }

        input[type=checkbox] {
            all: unset;
            position: relative;
            display: inline-block;
            border: 2px solid ${props => props.theme.colors.divider};
            border-radius: 4px;
            width: 16px;
            height: 16px;
            cursor: pointer;
        }

        input[type=checkbox]:checked {
            border: 2px solid ${props => props.theme.colors.primary};
        }

        input[type=checkbox]:checked::after {
            content: "✔";
            position: absolute;
            width: 100%;
            height: 100%;
            top: calc(50% - 9px);
            left: calc(50% - 6px);
            color: ${props => props.theme.colors.primary};
        }
    }

    div + div {
        margin-left: calc(var(--gutter) / 2);
    }

    @media (max-width: 500px) {
        flex-direction: column;

        div + div {
            margin-left: 0;
            margin-top: calc(var(--gutter) / 2);
        }
    }
`;
