import 'styled-components';
import { DefaultTheme } from './styled-components.d';
import { themes } from "@/styles/Themes";

declare module 'styled-components' {
  type ThemeType = typeof themes;

  export interface DefaultTheme extends ThemeType {}
}