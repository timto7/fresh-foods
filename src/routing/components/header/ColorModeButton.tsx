import { LuMoon, LuSun } from 'react-icons/lu';

import Button from '../../../components/Button';
import ButtonIconContainer from '../../../components/ButtonIconContainer';
import useThemeContext from '../../../hooks/useThemeContext';

const iconStyle = { fontSize: 20 };

const ColorModeButton = () => {
  const { currentMode, toggleMode } = useThemeContext();

  return (
    <Button
      onClick={() => toggleMode()}
      style={{ margin: '0 1em' }}
      title={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}
      variant="ghost"
    >
      <ButtonIconContainer>
        {currentMode === 'dark' ? (
          <LuSun style={iconStyle} />
        ) : (
          <LuMoon style={iconStyle} />
        )}
      </ButtonIconContainer>
    </Button>
  );
};

export default ColorModeButton;
