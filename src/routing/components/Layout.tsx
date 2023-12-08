import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Content from '../../components/Content';

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100dvh;
  width: 100%;
`;

const Layout = () => {
  return (
    <MasterContainer>
      <Header />
      <Content>
        <main>
          <Outlet />
        </main>
      </Content>
    </MasterContainer>
  );
};

export default Layout;
