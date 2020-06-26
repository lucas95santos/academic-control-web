import { keyframes } from 'styled-components';

export const ZoomIn = keyframes`
    from {
        transform: scale(0);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`
