import styled from 'styled-components';

interface CardProps {
    size: number;
    height: number;
    margin: {
        left: number;
        right: number;
    }
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

export const Card = styled.div`
    width: calc(100% / ${(props: CardProps) => props.size} - 16px);
    height: ${(props: CardProps) => props.height}px;
    background: ${props => props.theme.colors.card};
    border-radius: 8px;
    box-shadow: 0 2px 3px 0 #00000029;
    margin-left: ${(props: CardProps) => props.margin.left}px;
    margin-right: ${(props: CardProps) => props.margin.right}px;
`

export const AddCard = styled(Card)`
    background: transparent;
    box-shadow: none;
    border: 2px dashed ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear 0.2s;
    cursor: pointer;

    &:hover {
        transform: translateY(-10px);
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
