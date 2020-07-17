import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Yaru';
const colors = {
  white: '#FFFFFF',
  cyan: '#008080',
  red: '#ff0000',
  green: '#00b300',
  ubuntuOrange: '#e95420',
  lightAubergine: '#bb90b7',
  midAubergine: '#903c7b',
  darkAubergine: '#300a24',
  titleBarGray: '#2b2929',
  inactiveTitleBarGray: '#3d3a3a',
  titleBarText: '#c0c0c0',
  titleBarTextInactive: '#959697',
  menuGray: '#494949',
  bodyGray: '#edeef0',
  editorGray: '#2f2f2f',
  sideBarWhite: '#f6f6f6',
  highlightGray: '#e4e4e4',
  commentGray: '#8c8c8c',
  textGray: '#111111',
  ubuntuWarmGray: '#aea79f',
  guideGray: '#bfbfbf',
  badgeGreen: '#109a26',
  badgeRed: '#c6162b',
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
    comment: colors.commentGray,
    keyword: colors.midAubergine,
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
    invisibles: colors.guideGray,
    guide: colors.guideGray,
    selection: colors.lightAubergine + 'aa',
    selectionHighlight: colors.lightAubergine + 'aa',
    wordHighlight: colors.lightAubergine + 'aa',
    wordHighlightStrong: colors.lightAubergine + 'aa',
  },
  overrides: {
    'activityBar.background': colors.highlightGray,
    'activityBar.foreground': colors.textGray,
    'activityBarBadge.background': colors.badgeGreen,
    'badge.background': colors.badgeRed,
    'debugToolBar.background': colors.white,
    'dropdown.background': colors.white,
    'editor.background': colors.white,
    'editorGroupHeader.tabsBackground': colors.bodyGray,
    'editorHoverWidget.background': colors.sideBarWhite,
    'editorIndentGuide.activeBackground': colors.ubuntuOrange,
    'editorLineNumber.foreground': colors.ubuntuWarmGray,
    'editorMarkerNavigation.background': colors.sideBarWhite,
    'editorSuggestWidget.background': colors.sideBarWhite,
    'editorWidget.background': colors.sideBarWhite,
    'input.background': colors.white,
    'list.activeSelectionBackground': colors.ubuntuOrange,
    'list.hoverBackground': colors.highlightGray,
    'list.inactiveSelectionBackground': colors.highlightGray,
    'menu.background': colors.white,
    'menu.selectionBackground': colors.highlightGray,
    'menu.selectionForeground': colors.textGray,
    'menubar.selectionBackground': colors.white,
    'menubar.selectionForeground': colors.textGray,
    'panel.background': colors.bodyGray,
    'peekViewEditor.background': colors.white,
    'peekViewResult.background': colors.sideBarWhite,
    'peekViewTitle.background': colors.sideBarWhite,
    'sideBar.background': colors.sideBarWhite,
    'sideBarSectionHeader.background': colors.highlightGray,
    'statusBar.background': colors.white,
    'statusBar.debuggingForeground': colors.white,
    'statusBar.foreground': colors.textGray,
    'tab.inactiveBackground': colors.bodyGray,
    'tab.unfocusedInactiveBackground': colors.bodyGray,
    'terminal.background': colors.darkAubergine,
    'terminal.foreground': colors.white,
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