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
        padding: 0 var(--gutter) var(--gutter);
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    header {
        position: relative;
    }

    ::-webkit-scrollbar {
        width: 0;
    }
`
