import styled from 'styled-components';

export const SignInContainer = styled.div`
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

export const SignInArea = styled.div`
    min-width: 300px;
    width: 25vw;
    margin: 0 auto;
    padding: calc(var(--gutter) / 2);

    div.form-footer {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-family: var(--primary-font);
            font-weight: 400;
            font-size: 0.875rem;
            margin: 0;

            a {
                font-weight: 600;
                color: ${props => props.theme.colors.primary};
                text-decoration: none;
                transition: filter linear 0.2s;
                margin-left: 4px;

                &:hover {
                    filter: brightness(85%);
                }
            }
        }
    }
`;

export const SignInForm = styled.form`
    width: 100%;
    height: 100%;

    div.form-control {
        margin-bottom: calc(var(--gutter) / 2);
    }

    a {
        display: inline-block;
        margin-bottom: 16px;
        font-family: var(--primary-font);
        font-weight: 400;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.primary};
        text-decoration: none;
        transition: filter linear 0.2s;

        &:hover {
            filter: brightness(85%);
        }
    }

    button {
        margin-top: 16px;
        border: 0;
        outline: 0;
        font-family: var(--primary-font);
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
    }
`
