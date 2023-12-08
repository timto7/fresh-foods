import { Outlet } from 'react-router-dom';
import Header from './Header';
import Content from '../../components/Content';

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <main>
          <Outlet />
        </main>
      </Content>
    </>
  );
};

export default Layout;
