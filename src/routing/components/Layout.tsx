import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Content from '../../components/Content';

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100dvh;
  width: 100%;
`;

const GlobalStyle = createGlobalStyle`
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
    </MasterContainer>
  );
};

export default Layout;
