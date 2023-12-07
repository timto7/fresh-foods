import { Link } from 'react-router-dom';

import logo from '../../assets/FF-Icon.svg';
import Content from '../../components/Content';
import Button from '../../components/Button';

const Header = () => {
  return (
    <div style={{ position: 'relative', height: '60px', marginBottom: '10px' }}>
      <nav
        style={{
          backgroundColor: 'white',
          boxSizing: 'border-box',
          height: '60px',
          padding: '10px',
          position: 'fixed',
          width: '100%',
        }}
      >
        <Content>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link to="/">
                <img src={logo} height={40} width={40} />
              </Link>
            </div>
            <div>
              <Link to="/basket">
                <Button>Basket</Button>
              </Link>
            </div>
          </div>
        </Content>
      </nav>
    </div>
  );
};

export default Header;
