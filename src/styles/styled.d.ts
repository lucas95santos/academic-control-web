import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,
            default: string,
            primary: string,
            secondary: string,
            text: string,
            lightText: string,
            card: string,
            success: string,
            alert: string,
            fail: string,
            divider: string
        }
    }
}
