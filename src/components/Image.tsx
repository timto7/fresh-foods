import { LuFileImage } from 'react-icons/lu';
import styled from 'styled-components';

const ImageContainer = styled.div`
  align-items: center;
  background-color: #77777712;
  border-radius: ${(props) => props.theme.radii.surface};
  color: ${(props) => props.theme.colors.text.main};
  display: flex;
  height: 140px;
  justify-content: center;
  margin-bottom: 1em;
  max-width: 280px;
  width: 100%;
`;

const Image = () => {
  return (
    <ImageContainer>
      <LuFileImage style={{ fontSize: 40 }} />
    </ImageContainer>
  );
};

export default Image;
