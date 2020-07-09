import { Keyframes } from 'styled-components';
// animations
import {
    SlideInLeft,
    SlideInRight,
    SlideInTop,
    SlideInBottom,
    ZoomIn
} from '.';

export default function setAnimation(animationName: string): Keyframes {
    switch (animationName) {
        case 'SlideInLeft':
            return SlideInLeft;
        case 'SlideInRight':
            return SlideInRight;
        case 'SlideInTop':
            return SlideInTop;
        case 'SlideInBottom':
            return SlideInBottom;
        case 'ZoomIn':
            return ZoomIn;
        default:
            return SlideInLeft;
    }
}
