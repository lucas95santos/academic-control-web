import styled from 'styled-components';

interface DialogProps {
    width: number;
    height: number;
    fullscreen: boolean;
}

export const DialogContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000050;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all linear 0.2s;
`;

export const DialogContent = styled.div`
    min-width: max(${(props: DialogProps) => props.width}px, 300px);
    min-height: max(${(props: DialogProps) => props.height}px, 400px);
    background-color: ${props => props.theme.colors.card};
    border-radius: 8px;
    box-shadow: var(--card-box-shadow);
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        min-width: 100vw;
        min-height: 100vh;
        border-radius: 0;
    }
`;

export const DialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;

    span {
        font-family: var(--primary-font);
        font-size: 1.2rem;
        font-weight: 600;
        color: ${props => props.theme.colors.lightText}
    }

    div {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: box-shadow linear 0.15s;

        svg {
            font-size: 1.4rem;
            color: ${props => props.theme.colors.lightText};
            cursor: pointer;
        }

        &:hover {
            box-shadow: 0 0 3px 1px #00000015;
        }
    }
`;

export const DialogBody = styled.div`
    flex: 1;
    padding: 16px;
`;

export const DialogFooter = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        border: 0;
        outline: 0;
        font-family: var(--secondary-font);
        font-weight: 600;
        font-size: 0.875rem;
        width: 24%;
        height: 35px;
        border-radius: 4px;
        box-shadow: 0 0 5px 2px #00000029;
        cursor: pointer;
        transition: filter linear 0.2s;

        &:hover {
            filter: brightness(85%);
        }
    }

    .cancel {
        color: #616161;
        background-color: ${props => props.theme.colors.default};
    }

    .success {
        color: #ffffff;
        background-color: ${props => props.theme.colors.primary};
    }
`;
