import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Yaru';
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  blue: '#5555FF',
  red: '#FF5555',
  green: '#55FF55',
  yellow: '#FFFF33',
  ubuntuGray: '#2b2929',
  ubuntuMediumGray: '#1e1d1d',
  ubuntuDarkGray: '#111111',
  ubuntuOrange: '#e95420',
  lightAubergine: '#77216f',
  lighterAubergine: '#9f639a',
  midAubergine: '#5e2750',
  darkAubergine: '#2c001e'
}

const colorSet: IColorSet = {
  base: {
    background: colors.ubuntuGray,
    foreground: colors.white,
    color1: colors.ubuntuOrange,
    color2: colors.red,
    color3: colors.green,
    color4: colors.lighterAubergine
  },
  syntax: {
    keyword: colors.lighterAubergine
  },
  terminal: {
    black: '#000000',
    red: '#aa0000',
    green: '#00aa00',
    yellow: '#aa5500',
    blue: '#0000aa',
    magenta: '#aa00aa',
    cyan: '#00aaaa',
    white: '#aaaaaa',
    brightBlack: '#555555',
    brightRed: '#ff5555',
    brightGreen: '#55ff55',
    brightYellow: '#ffff55',
    brightBlue: '#5555ff',
    brightMagenta: '#ff55ff',
    brightCyan: '#55ffff',
    brightWhite: '#ffffff',
  },
  overrides: {
    'editor.background': colors.ubuntuDarkGray,
    'editorGroupHeader.tabsBackground': colors.ubuntuGray,
    'panel.background': colors.ubuntuDarkGray,
    'sideBar.background': colors.ubuntuGray,
    'terminal.background': '#300a24',
  }
};

var fileName = themeName
  .toLowerCase()
  .replace(/\[\w*\]/, '')
  .trim()
  .replace(/\s+/, '-') + '.json';

generateTheme(themeName, colorSet, path.join(__dirname, fileName));