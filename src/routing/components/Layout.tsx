import { Outlet, ScrollRestoration } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Content from '../../components/Content';
import Header from './header/Header';

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100dvh;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
  * {
    transition: color .1s ease, background-color .1s ease;
  }

  body {
    background: ${(props) => props.theme.colors.background};
  }
`;

const Layout = () => {
  return (
    <MasterContainer>
      <Header />
      <Content>
        <main style={{ paddingBottom: 20 }}>
          <Outlet />
        </main>
      </Content>
      <GlobalStyle />
      <ScrollRestoration />
    </MasterContainer>
  );
};

export default Layout;
