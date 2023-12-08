import styled from 'styled-components';

const ButtonIconContainer = styled.div<{
  $position?: 'center' | 'end' | 'start';
}>`
  align-items: center;
  display: flex;
  margin-right: ${(props) => (props.$position === 'start' ? '0.5em' : 0)};
  margin-left: ${(props) => (props.$position === 'end' ? '0.5em' : 0)};
`;

export default ButtonIconContainer;
