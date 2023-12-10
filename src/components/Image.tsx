import { LuFileImage } from 'react-icons/lu';
import styled from 'styled-components';

// A placeholder for a product image
// Would source real images if supplied by backend
const ImageContainer = styled.div`
  align-items: center;
  background-color: #77777712;
  border-radius: ${(props) => props.theme.radii.surface};
  color: ${(props) => props.theme.colors.text.main};
  display: flex;
  height: 140px;
  justify-content: center;
  max-width: 240px;
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
