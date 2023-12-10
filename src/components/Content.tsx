import styled from 'styled-components';

// Centralised the app content and applies a max width
const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1366px;
  padding: 0 2em;

  @media (max-width: 640px) {
    padding: 0 1em;
  }
`;

export default Content;
