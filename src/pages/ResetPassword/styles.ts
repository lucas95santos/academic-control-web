import styled from 'styled-components';

export const ResetPasswordContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: calc(var(--gutter) * 2.5);

    div#logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: calc(var(--gutter) * 2.5);

        @media (min-width: 400px) {
            margin-bottom: calc(var(--gutter) * 1.6);
        }

        img {
            width: 64px;
            margin-bottom: calc(var(--gutter) / 2);
        }

        h1 {
            font-family: var(--secondary-font);
            font-size: 1.5rem;
        }
    }
`;

export const ResetPasswordArea = styled.div`
    min-width: 300px;
    width: max(25vw, 500px);
    margin: 0 auto;
    padding: calc(var(--gutter) / 2);
    text-align: center;

    p {
        font-family: var(--secondary-font);
        font-weight: 600;
        font-size: 1.6rem;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 16px;
    }

    span {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.4rem;
        color: ${props => props.theme.colors.text};
    }

    button {
        margin-top: 16px;
        border: 0;
        outline: 0;
        font-family: var(--secondary-font);
        font-weight: 600;
        font-size: 1rem;
        color: #ffffff;
        background-color: ${props => props.theme.colors.primary};
        width: 100%;
        height: 45px;
        border-radius: 4px;
        box-shadow: 0 0 5px 2px #00000029;
        cursor: pointer;
        transition: filter linear 0.2s;

        &:hover {
            filter: brightness(85%);
        }

        &.login {
            margin-top: calc(var(--gutter) * 2);
        }
    }
`;

export const ResetPasswordForm = styled.form`
    max-width: 25vw;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    div.form-control {
        margin-bottom: calc(var(--gutter) / 2);
        text-align: left;
    }
`;
