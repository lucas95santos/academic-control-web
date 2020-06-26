import { keyframes } from 'styled-components';

export const SlideInLeft = keyframes`
    from {
        margin-left: 100%;
        opacity: 0;
    }
    to {
        margin-left: 16px;
        opacity: 1;
    }
`

export const SlideInRight = keyframes`
    from {
        margin-left: -100%;
        opacity: 0;
    }
    to {
        margin-left: 0%;
        opacity: 1;
    }
`

export const SlideInTop = keyframes`
    from {
        margin-top: -100%;
        opacity: 0;
    }
    to {
        margin-top: 0%;
        opacity: 1;
    }
`

export const SlideInBottom = keyframes`
    from {
        margin-top: 100%;
        opacity: 0;
    }
    to {
        margin-top: 0%;
        opacity: 1;
    }
`
