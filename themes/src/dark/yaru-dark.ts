import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Yaru Dark';
const colors = {
  white: '#FFFFFF',
  cyan: '#55ffff',
  red: '#FF5555',
  green: '#55ff55',
  ubuntuOrange: '#e95420',
  lightAubergine: '#bb90b7',
  midAubergine: '#5e2750',
  darkAubergine: '#300a24',
  titleBarGray: '#2b2929',
  inactiveTitleBarGray: '#3d3a3a',
  menuGray: '#494949',
  bodyGray: '#383838',
  editorGray: '#2f2f2f',
  sideBarGray: '#3f3f3f',
  highlightGray: '#575757',
  commentGray: '#a8a8a8',
}

const colorSet: IColorSet = {
  base: {
    background: colors.bodyGray,
    foreground: colors.white,
    color1: colors.ubuntuOrange,
    color2: colors.red,
    color3: colors.green,
    color4: colors.cyan
  },
  syntax: {
    comment: colors.commentGray,
    keyword: colors.lightAubergine,
    markdownQuote: colors.commentGray,
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
  ui: {
    selection: colors.midAubergine
  },
  overrides: {
    'activityBar.background': colors.highlightGray,
    'editor.background': colors.editorGray,
    'editorGroupHeader.tabsBackground': colors.bodyGray,
    'editorIndentGuide.activeBackground': colors.ubuntuOrange,
    'list.activeSelectionBackground': colors.ubuntuOrange,
    'list.hoverBackground': colors.highlightGray,
    'list.inactiveSelectionBackground': colors.highlightGray,
    'menu.background': colors.menuGray,
    'menu.selectionBackground': colors.highlightGray,
    'menubar.selectionBackground': colors.menuGray,
    'panel.background': colors.bodyGray,
    'sideBar.background': colors.sideBarGray,
    'sideBarSectionHeader.background': colors.highlightGray,
    'statusBar.background': colors.editorGray,
    'tab.inactiveBackground': colors.bodyGray,
    'tab.unfocusedInactiveBackground': colors.bodyGray,
    'terminal.background': colors.darkAubergine,
    'titleBar.activeBackground': colors.titleBarGray,
    'titleBar.inactiveBackground': colors.inactiveTitleBarGray,
  }
};

var fileName = themeName
  .toLowerCase()
  .replace(/\[\w*\]/, '')
  .trim()
  .replace(/\s+/, '-') + '.json';

generateTheme(themeName, colorSet, path.join(__dirname, fileName));