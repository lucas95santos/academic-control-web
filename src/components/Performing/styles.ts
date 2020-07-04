import styled from 'styled-components';
import { shade } from 'polished';

interface PerformingButtonProps {
    margin: {
        left: number;
        right: number;
    }
}

export const PerformingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const PerformingOptions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 16px 0;
`

export const PerformingButton = styled.button`
    min-width: 64px;
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    font-family: var(--primary-font);
    font-size: 0.750rem;
    font-weight: bold;
    text-transform: uppercase;

    padding: 4px 8px;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 8px;

    cursor: pointer;
    transition: all linear 0.2s;
    outline: 0;

    margin-left: ${(props: PerformingButtonProps) => props.margin.left}px;
    margin-right: ${(props: PerformingButtonProps) => props.margin.right}px;

    &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: #ffffff;
    }
`

export const PerformingButtonActive = styled(PerformingButton)`
    background-color: ${props => props.theme.colors.primary};
    color: #ffffff;
    border: 2px solid transparent;

    &:hover {
        background-color: ${props => shade(0.35, props.theme.colors.primary)};
    }
`
