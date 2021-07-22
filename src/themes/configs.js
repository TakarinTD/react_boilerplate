import { COLORS } from './colors';

const DRAWER_WIDTH = 65;
const DRAWER_HOVER_WIDTH = 240;
const HEADER_HEIGHT = 50;

const BOX_SHADOW = {
  layout:
    'rgba(0, 0, 0, 0.42) 0px 10px 30px -12px, rgba(0, 0, 0, 0.12) 0px 4px 25px 0px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px',
};

const FEATURE_COLORS = {
  white: COLORS.white,
  black: COLORS.black,

  primary: '#4991e2',
  secondary: COLORS.yellow[500],
  tertiary: '#000034',
  divider: COLORS.gray[400],
  pink: '#f16a73',

  bgContent: '#f5f5f5',
  bgIconUserSay: '#616161',
  bgIconHeader: COLORS.white,
  bgIconSidebar: 'rgba(0, 0, 0, 0.87)',
  bgPrimarySidebar: 'rgba(0, 0, 0, 0.12)',
};

const TRANSITION = {
  layout: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
  data: '200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
};

const BORDER = {
  input: `1px solid ${FEATURE_COLORS.bgPrimarySidebar}`,
  inputHover: `2px solid ${FEATURE_COLORS.tertiary}`,
  inputFocus: `2px solid ${FEATURE_COLORS.primary}`,
  userSay: `3px solid ${FEATURE_COLORS.primary}`,
};

export {
  DRAWER_WIDTH,
  DRAWER_HOVER_WIDTH,
  HEADER_HEIGHT,
  BOX_SHADOW,
  FEATURE_COLORS,
  TRANSITION,
  BORDER,
};
