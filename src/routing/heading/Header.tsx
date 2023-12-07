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
          position: 'fixed',
          width: '100%',
        }}
      >
        <Content>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              height: '60px',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  <img
                    src={logo}
                    height={40}
                    width={40}
                    style={{ marginRight: '1em' }}
                  />
                  <span
                    style={{
                      color: 'black',
                      fontSize: 28,
                      fontWeight: 800,
                      paddingTop: '0.25em',
                    }}
                  >
                    Fresh Food
                  </span>
                </div>
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
