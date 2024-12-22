export const colors = {
  // Brand Colors
  primary: '#6246EA',
  secondary: '#A594F9',
  tertiary: '#494553',
  accent: '#00B5E2',

  // Semantic Colors
  success: '#34A853',
  warning: '#F9AB00',
  error: '#EA4335',
  info: '#00B5E2',

  // Background Colors
  background: {
    primary: '#1A1A1A',
    secondary: '#2B2B2B',
    tertiary: '#494553',
  },

  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    disabled: '#555555',
  },

  // Border Colors
  border: {
    default: '#444444',
    secondary: '#333333',
  },

  // Surface Colors
  surface: '#2B2B2B',
  overlay: 'rgba(0, 0, 0, 0.5)',

  // Component States
  states: {
    hover: 'rgba(255, 255, 255, 0.1)',
    active: 'rgba(255, 255, 255, 0.2)',
    focus: 'rgba(98, 70, 234, 0.4)',
    disabled: 'rgba(255, 255, 255, 0.1)',
  },

  // Component-specific Colors
  button: {
    primary: '#6246EA',
    secondary: '#A594F9',
    ghost: 'transparent',
    danger: '#EA4335',
    text: '#FFFFFF',
    hover: {
      primary: '#7E6BEE',
      secondary: '#BEB0FA',
      ghost: 'rgba(255, 255, 255, 0.1)',
      danger: '#F04B3E',
    },
    active: {
      primary: '#4E38BB',
      secondary: '#8C7AC7',
      ghost: 'rgba(255, 255, 255, 0.2)',
      danger: '#BB362C',
    },
    disabled: {
      background: '#333333',
      text: '#555555',
    },
  },

  input: {
    background: '#2B2B2B',
    border: '#444444',
    placeholder: '#555555',
    focus: {
      border: '#6246EA',
      shadow: 'rgba(98, 70, 234, 0.2)',
    },
    error: {
      border: '#EA4335',
      shadow: 'rgba(234, 67, 53, 0.2)',
    },
    disabled: {
      background: '#1A1A1A',
      border: '#333333',
      text: '#555555',
    },
  },

  card: {
    background: '#2B2B2B',
    border: '#444444',
    hover: {
      border: '#555555',
    },
  },

  dropdown: {
    background: '#2B2B2B',
    border: '#444444',
    hover: {
      background: 'rgba(255, 255, 255, 0.1)',
    },
    selected: {
      background: '#6246EA',
      text: '#FFFFFF',
    },
  },
};

export type Colors = typeof colors;
