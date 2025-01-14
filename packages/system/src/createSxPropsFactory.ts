import createStylePropsFactory from "./createStylePropsFactory";
import { Theme } from "./createTheme";
import getThemeValue from "./getThemeValue";

export function resolveThemeValue(
  theme: Theme,
  key: keyof Theme,
  value: unknown
) {
  if (typeof value !== "string") return value;
  const names = value.split(".");
  let ref = theme[key];
  for (let i = 0; i < names.length; i++) {
    ref = ref?.[names[i]];
    if (!ref) break;
  }
  return ref ?? value;
}

function createSxPropsFactory(
  options: {
    spacing?: {
      themeSpacing?: boolean;
    };
    border?: {
      themeBorderRadius?: boolean;
    };
  } = {}
) {
  return createStylePropsFactory({
    border: {
      onValue: (name, value, theme) => {
        if (name === "borderRadius") {
          if (typeof value === "number") {
            if (options.border?.themeBorderRadius) {
              return `${theme.shape.borderRadius * value}px`;
            } else {
              return `${value}px`;
            }
          }
        }
        if (name.includes("Color"))
          return resolveThemeValue(theme, "palette", value);
        if (typeof value === "number") value = `${value}px solid`;
        return value;
      },
    },
    palette: {
      onValue: (name, value, theme) => {
        return resolveThemeValue(theme, "palette", value);
      },
    },
    position: {
      onValue: (name, value, theme) => {
        if (name === "zIndex") {
          value = theme.zIndex?.[name] ?? value;
        }
        return value;
      },
    },
    sizing: {
      onValue: (name, value, theme) => {
        if (name === "maxWidth") {
          value = theme.breakpoints.values[name as "xs"] ?? value;
        }
        if (typeof value === "number" && value > 0 && value <= 1) {
          return `${value * 100}%`;
        } else {
          return value;
        }
      },
    },
    spacing: {
      onValue: (name, value, theme) => {
        return options.spacing?.themeSpacing ? theme.spacing(value) : value;
      },
    },
    typography: {
      onValue: (name, value, theme) => {
        if (name === "typography") {
          return getThemeValue(theme, "typography", value);
        } else if (typeof value === "string") {
          return resolveThemeValue(theme, "typography", value);
        }
        return value;
      },
    },
  });
}

export default createSxPropsFactory;
