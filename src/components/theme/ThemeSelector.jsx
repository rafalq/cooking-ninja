import { useTheme } from "../../hooks/useTheme";

// styles
import "./ThemeSelector.css";

const themeColors = ["#b5b5b5", "#a4add6", "#81bd79", "#bda379"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();

  return (
    <div className="theme-selector">
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
