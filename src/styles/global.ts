import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --primary-font: 'Poppins', sans-serif;
        --secondary-font: 'Montserrat', sans-serif;
        --gutter: 32px;
        --card-box-shadow: 0 2px 3px 0 #00000029;
    }

    @media (max-width: 416px) {
        :root {
            --gutter: 16px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-family: sans-serif;
        font-size: 16px;
        color: ${props => props.theme.colors.text};
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    header {
        position: relative;
        padding: 0 var(--gutter) var(--gutter);
    }

    label {
        font-size: 0.875rem;
        font-family: var(--secondary-font);
        font-weight: 600;
        color: ${props => props.theme.colors.lightText};
    }

    input, select {
        width: 100%;
        height: 40px;
        background-color: ${props => props.theme.colors.card};
        border: 1px solid ${props => props.theme.colors.divider};
        border-radius: 4px;
        outline: 0;
        padding: 16px 8px;
        margin-top: 8px;

        font-size: 1rem;
        font-family: var(--secondary-font);
        color: ${props => props.theme.colors.text};
        transition: border-color linear 0.33s;

        &:focus {
            border: 2px solid ${props => props.theme.colors.primary};
        }
    }

    textarea {
        width: 100%;
        height: 140px;
        background-color: ${props => props.theme.colors.card};
        border: 1px solid ${props => props.theme.colors.divider};
        border-radius: 4px;
        outline: 0;
        padding: 8px;
        margin-top: 6px;
        resize: none;

        font-size: 1rem;
        font-family: var(--secondary-font);
        color: ${props => props.theme.colors.text};
        transition: border-color linear 0.33s;

        &:focus {
            border: 2px solid ${props => props.theme.colors.primary};
        }

        @media (max-width: 500px) {
            height: 100px;
        }
    }

    select {
        -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
        -moz-appearance: none; /* Remove estilo padrão do FireFox */
        appearance: none; /* Remove estilo padrão do FireFox*/
        padding: 0 4px;
    }

    ::-webkit-scrollbar {
        width: 0;
    }
`
