import { Link } from 'react-router-dom';
import styled from 'styled-components';

import darkLogo from '../../assets/FF-Icon_Dark.svg';
import lightLogo from '../../assets/FF-Icon_Light.svg';
import BasketButton from '../../components/BasketButton';
import ColorModeButton from '../../components/ColorModeButton';
import Content from '../../components/Content';
import useThemeContext from '../../hooks/useThemeContext';

const NavContainer = styled.div`
  height: 60px;
  margin-bottom: 20px;
  position: relative;
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
                    height={40}
                    width={40}
                    style={{ marginRight: '1em' }}
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
