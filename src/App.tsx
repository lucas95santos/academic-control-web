import React from 'react';
// hooks
import { usePersistedState } from './hooks';
// routes
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
// components
import { Header } from './components';
// styles
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from './styles/global';
// themes
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

const App: React.FunctionComponent = () => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('ac-theme-0.0.1', lightTheme);
    // work around - remover depois
    const [isSigned, setIsSigned] = React.useState(false);

    React.useEffect(() => {
        const signInStoraged = localStorage.getItem('ac-signin');
        if (signInStoraged) {
            setIsSigned(JSON.parse(signInStoraged));
        } else {
            localStorage.setItem('ac-signin', JSON.stringify(false));
        }
    }, []);

    function toogleTheme() {
       setTheme(theme.title === 'ac-light-theme' ? darkTheme : lightTheme);
    }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />

                {isSigned && <Header toogleTheme={toogleTheme} />}
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
