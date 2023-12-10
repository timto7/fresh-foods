import { Link } from 'react-router-dom';
import styled from 'styled-components';

import darkLogo from '../../../assets/FF-Icon_Dark.svg';
import lightLogo from '../../../assets/FF-Icon_Light.svg';
import Content from '../../../components/Content';
import useThemeContext from '../../../hooks/useThemeContext';
import BasketButton from './BasketButton';
import ColorModeButton from './ColorModeButton';

const NavContainer = styled.div`
  height: 60px;
  margin-bottom: 2em;
  position: relative;

  @media (max-width: 640px) {
    margin-bottom: 1em;
  }
`;

const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.surface};
  box-shadow: ${(props) => props.theme.shadows.surface};
  box-sizing: border-box;
  position: fixed;
  width: 100%;
`;

const NavContent = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
`;

const SiteTitle = styled.span`
  color: ${(props) => props.theme.colors.text.solid};
  font-size: 24px;
  font-weight: 800;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Flex = styled.div`
  align-items: center;
  display: flex;
`;

const Header = () => {
  const { currentMode } = useThemeContext();

  return (
    <NavContainer>
      <Nav>
        <Content>
          <NavContent>
            <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Flex>
                  <img
                    src={currentMode === 'dark' ? darkLogo : lightLogo}
                    style={{ marginRight: '1em' }}
                    height={40}
                    width={40}
                  />
                  <SiteTitle>Fresh Foods</SiteTitle>
                </Flex>
              </Link>
            </div>
            <Flex>
              <ColorModeButton />
              <BasketButton />
            </Flex>
          </NavContent>
        </Content>
      </Nav>
    </NavContainer>
  );
};

export default Header;
