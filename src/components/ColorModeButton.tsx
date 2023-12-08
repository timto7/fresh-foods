import { LuMoon, LuSun } from 'react-icons/lu';

import useThemeContext from '../hooks/useThemeContext';
import Button from './Button';
import ButtonIconContainer from './ButtonIconContainer';

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
