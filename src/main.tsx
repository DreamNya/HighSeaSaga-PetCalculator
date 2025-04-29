import { StrictMode } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { loadStorage } from './store/ItemStore.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <StyleProvider layer>
                <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
                    <App />
                </ConfigProvider>
            </StyleProvider>
        </Provider>
    </StrictMode>,
);

setTimeout(() => {
    loadStorage();
});
