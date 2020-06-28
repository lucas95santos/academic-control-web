import styled, { Keyframes } from 'styled-components';
// animations
import BaseAnimation, {
    SlideInLeft,
    SlideInLeftAlternative,
    SlideInRight,
    SlideInTop,
    SlideInBottom,
    ZoomIn
} from '../../styles/animations';

interface CardProps {
    width?: string;
    height: number;
    margin: {
        left: number;
        right: number;
    };
    image?: any;
    animationName?: string;
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

    &:nth-child(1) {
        margin-bottom: 32px;
    }
`

function setAnimation(animationName: string): Keyframes {
    switch (animationName) {
        case 'SlideInLeft':
            return SlideInLeft;
        case 'SlideInLeftAlternative':
            return SlideInLeftAlternative;
        case 'SlideInRight':
            return SlideInRight;
        case 'SlideInTop':
            return SlideInTop;
        case 'SlideInBottom':
            return SlideInBottom;
        case 'ZoomIn':
            return ZoomIn;
        default:
            return SlideInLeft;
    }
}

export const Card = styled(BaseAnimation)`
    position: relative;
    min-width: 250px;
    width: ${(props: CardProps) => props.width ? props.width : '250px'};
    height: ${(props: CardProps) => props.height}px;
    background: ${props => props.theme.colors.card};
    border-radius: 8px;
    border-left: 8px solid ${props => props.theme.colors.primary};
    padding: 16px;
    box-shadow: 0 2px 3px 0 #00000029;
    margin-left: ${(props: CardProps) => props.margin.left}px;
    margin-right: ${(props: CardProps) => props.margin.right}px;

    background-image: url(${(props: CardProps) => props.image});
    background-position: right bottom;
    background-repeat: no-repeat;

    animation-name: ${(props: CardProps) => props.animationName ? setAnimation(props.animationName) : ''};
`

export const CardTitle = styled.span`
    font-family: var(--primary-font);
    font-size: 0.875rem;
    font-weight: 600;
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
`

export const CardDivider = styled.div`
    width: 100%;
    height: 1px;
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
        font-size: 0.7rem;
        line-height: 0.6rem;
        color: ${(props: CardMessageProps) => props.color};
        text-transform: none;
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

    transition: transform linear 0.2s !important;
    cursor: pointer;

    &:hover {
        transform: translateY(-5%) !important;
    }
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
`
