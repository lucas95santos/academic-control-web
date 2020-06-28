import { keyframes } from 'styled-components';

export const SlideInLeft = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
`

export const SlideInLeftAlternative = keyframes`
    from {
        margin-left: 250px;
        opacity: 0;
    }
    to {
        margin-left: 16px;
        opacity: 1;
    }
`

export const SlideInRight = keyframes`
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0%);
        opacity: 1;
    }
`

export const SlideInTop = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
`

export const SlideInBottom = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0%);
        opacity: 1;
    }
`
