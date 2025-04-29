import { ConfigProvider, Layout, theme } from 'antd';
import { darken, lighten } from 'polished';
import './App.css';
import BasicApp from './components/BasicApp';
import TargetApp from './components/TargetApp';
import BreedItemApp from './components/BreedItemApp';
import HeaderApp from './components/HeaderApp';

const { Header, Content } = Layout;

export const bg = 'rgba(9, 9, 11, 0.6)';

const App: React.FC = () => {
    const { token } = theme.useToken();

    return (
        <ConfigProvider
            theme={{
                components: {
                    InputNumber: {
                        colorBgContainer: lighten(0.121, bg),
                        colorTextPlaceholder: darken(0.4, token.colorText),
                    },
                    Statistic: {
                        titleFontSize: 16,
                    },
                    Typography: {
                        colorLink: lighten(0.121, token.colorLink),
                        colorLinkActive: lighten(0.121, token.colorLinkActive),
                        colorLinkHover: lighten(0.121, token.colorLinkHover),
                    },
                    Steps: {
                        colorTextDescription: token.colorText,
                    },
                },
            }}>
            <Layout style={{ height: '100vh', width: '100vw' }}>
                <Header
                    style={{
                        // color: '#fff',
                        backgroundColor: bg,
                        backdropFilter: 'blur(4px)',
                        position: 'fixed',
                        width: '100%',
                        zIndex: 1,
                    }}>
                    <HeaderApp />
                </Header>
                <Content
                    style={{
                        padding: '80px 50px',
                        background:
                            'radial-gradient(at 16.1056% 33.5845%, rgb(131, 116, 240) 0px, transparent 50%), radial-gradient(at 79.7715% 11.6477%, rgb(87, 77, 153) 0px, transparent 50%), radial-gradient(at 85% 75%, rgb(46, 40, 75) 0px, transparent 50%), radial-gradient(at 38.6967% 80.4224%, rgb(79, 14, 60) 0px, transparent 50%) rgb(0, 0, 0)',
                        backgroundAttachment: 'fixed',
                        overflow: 'auto',
                        scrollbarGutter: 'stable',
                        height: '100%',
                    }}>
                    <BasicApp />
                    <BreedItemApp />
                    <TargetApp />
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

export default App;
