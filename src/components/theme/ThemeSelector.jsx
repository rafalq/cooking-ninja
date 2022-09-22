import { useTheme } from "../../hooks/useTheme";

// styles
import "./ThemeSelector.css";

const themeColors = ["#b5b5b5", "#a4add6", "#81bd79", "#bda379"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img 
        onClick={toggleMode}
        src="mode-icon.svg" alt="theme mode icon" 
        style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}/>
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
