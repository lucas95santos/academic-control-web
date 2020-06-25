import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --primary-font: 'Poppins', sans-serif;
        --secondary-font: 'Montserrat', sans-serif;
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
        padding: 0 32px 32px;
    }

    ::-webkit-scrollbar {
        width: 5px;
        background-color: ${props => props.theme.colors.default};
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: inset 0 0 6px rgba(32, 31, 31, 0.5);
        -moz-box-shadow: inset 0 0 6px rgba(32, 31, 31, 0.5);
    }
`
