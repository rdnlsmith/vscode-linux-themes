import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Elementary';
const colors = {
  white: '#FFFFFF',
  cyan: '#008080',
  red: '#ff0000',
  green: '#00b300',
  ubuntuOrange: '#e95420',
  lightAubergine: '#bb90b7',
  midAubergine: '#903c7b',
  darkAubergine: '#300a24',
  titleBarGray: '#dcdcdc',
  inactiveTitleBarGray: '#ececec',
  titleBarText: '#5e5e5e',
  titleBarTextInactive: '#848484',
  menuGray: '#494949',
  bodyGray: '#eff0f1',
  editorGray: '#2f2f2f',
  sideBarWhite: '#f6f6f6',
  highlightGray: '#e4e4e4',
  commentGray: '#8c8c8c',
  textGray: '#111111',
  ubuntuWarmGray: '#aea79f',
  guideGray: '#bfbfbf',
  editorBackground: '#fdf6e3',
  tabsBackground: '#fbefce',
  tabsBorder: '#e9d18d',
}

const colorSet: IColorSet = {
  type: 'light',
  base: {
    background: colors.bodyGray,
    foreground: colors.textGray,
    color1: colors.ubuntuOrange,
    color2: colors.red,
    color3: colors.green,
    color4: colors.cyan
  },
  syntax: {
    // comment: colors.commentGray,
    // keyword: colors.midAubergine,
    // markdownQuote: colors.commentGray,
  },
  terminal: {
    black: '#586e75',
    red: '#cb4b16',
    green: '#859900',
    yellow: '#b58900',
    blue: '#268bd2',
    magenta: '#d33682',
    cyan: '#2aa198',
    white: '#eeeeee',
    brightBlack: '#073642',
    brightRed: '#dc322f',
    brightGreen: '#859900',
    brightYellow: '#b58900',
    brightBlue: '#268bd2',
    brightMagenta: '#ec0048',
    brightCyan: '#2aa198',
    brightWhite: '#94a3a5',
  },
  ui: {
    // invisibles: colors.guideGray,
    // guide: colors.guideGray,
    // selection: colors.midAubergine,
  },
  overrides: {
    // 'activityBar.background': colors.highlightGray,
    // 'activityBar.foreground': colors.textGray,
    // 'debugToolBar.background': colors.white,
    // 'dropdown.background': colors.white,
    'editor.background': colors.editorBackground,
    'editorGroupHeader.tabsBackground': colors.tabsBackground,
    // 'editorHoverWidget.background': colors.sideBarWhite,
    // 'editorIndentGuide.activeBackground': colors.ubuntuOrange,
    // 'editorLineNumber.foreground': colors.ubuntuWarmGray,
    // 'editorMarkerNavigation.background': colors.sideBarWhite,
    // 'editorSuggestWidget.background': colors.sideBarWhite,
    // 'editorWidget.background': colors.sideBarWhite,
    // 'input.background': colors.white,
    // 'list.activeSelectionBackground': colors.ubuntuOrange,
    // 'list.hoverBackground': colors.highlightGray,
    // 'list.inactiveSelectionBackground': colors.highlightGray,
    // 'menu.background': colors.white,
    // 'menu.selectionBackground': colors.highlightGray,
    // 'menu.selectionForeground': colors.textGray,
    // 'menubar.selectionBackground': colors.white,
    // 'menubar.selectionForeground': colors.textGray,
    // 'panel.background': colors.bodyGray,
    // 'peekViewEditor.background': colors.white,
    // 'peekViewResult.background': colors.sideBarWhite,
    // 'peekViewTitle.background': colors.sideBarWhite,
    // 'sideBar.background': colors.sideBarWhite,
    // 'sideBarSectionHeader.background': colors.highlightGray,
    // 'statusBar.background': colors.white,
    // 'statusBar.debuggingForeground': colors.white,
    // 'statusBar.foreground': colors.textGray,
    'tab.activeBorder': colors.editorBackground,
    'tab.inactiveBackground': colors.tabsBackground,
    'tab.inactiveBorder': colors.tabsBorder,
    // 'tab.unfocusedInactiveBackground': colors.bodyGray,
    'terminal.background': '#252e32',
    'terminal.foreground': '#94a3a5',
    'titleBar.activeBackground': colors.titleBarGray,
    'titleBar.activeForeground': colors.titleBarText,
    'titleBar.inactiveBackground': colors.inactiveTitleBarGray,
    'titleBar.inactiveForeground': colors.titleBarTextInactive,
  }
};

var fileName = themeName
  .toLowerCase()
  .replace(/\[\w*\]/, '')
  .trim()
  .replace(/\s+/, '-') + '.json';

generateTheme(themeName, colorSet, path.join(__dirname, fileName));