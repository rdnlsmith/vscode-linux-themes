import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Arc Dark';
const colors = {
  arcGray1: '#404552',
  arcGray2: '#383c4a',
  arcGray3: '#4b5162',
  arcGray4: '#7c818c',
  arcGray5: '#21232c',
  arcBlue: '#5294e2',
  commentBlue: '#a8b4de',
  black: '#262b36',
  red: '#9c3528',
  green: '#61bc3b',
  yellow: '#f3b43a',
  blue: '#0d68a8',
  magenta: '#744560',
  cyan: '#288e9c',
  white: '#a2a2a2',
  brightBlack: '#2f343f',
  brightRed: '#d64937',
  brightGreen: '#86df5d',
  brightYellow: '#fdd75a',
  brightBlue: '#0f75bd',
  brightMagenta: '#9e5e83',
  brightCyan: '#37c3d6',
  brightWhite: '#f9f9f9'
}

const colorSet: IColorSet = {
  base: {
    background: colors.arcGray2,
    foreground: colors.white,
    color1: colors.arcBlue,
    color2: colors.green,
    color3: colors.cyan,
    color4: colors.yellow
  },
  syntax: {
    boolean: colors.yellow,
    comment: colors.commentBlue,
    functionCall: colors.brightCyan,
    identifier: colors.brightRed,
    markdownQuote: colors.commentBlue,
  },
  terminal: {
    black: colors.black,
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow,
    blue: colors.blue,
    magenta: colors.magenta,
    cyan: colors.cyan,
    white: colors.white,
    brightBlack: colors.brightBlack,
    brightRed: colors.brightRed,
    brightGreen: colors.brightGreen,
    brightYellow: colors.brightYellow,
    brightBlue: colors.brightBlue,
    brightMagenta: colors.brightMagenta,
    brightCyan: colors.brightCyan,
    brightWhite: colors.brightWhite,
  },
  overrides: {
    'activityBar.background': colors.arcGray3,
    'list.activeSelectionBackground': colors.arcBlue,
    'list.hoverBackground': colors.arcGray3,
    'list.inactiveSelectionBackground': colors.arcGray3,
    'panel.background': colors.arcGray2,
    'sideBar.background': colors.arcGray1,
    'sideBarSectionHeader.background': colors.arcGray3,
    'statusBar.background': colors.brightBlack,
    'terminal.background': colors.arcGray2,
    'titleBar.activeBackground': colors.brightBlack,
    'titleBar.inactiveBackground': colors.brightBlack
  }
};

var fileName = themeName
  .toLowerCase()
  .replace(/\[\w*\]/, '')
  .trim()
  .replace(/\s+/, '-') + '.json';

generateTheme(themeName, colorSet, path.join(__dirname, fileName));