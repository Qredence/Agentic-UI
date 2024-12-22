"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  colors: () => colors,
  layout: () => layout,
  radius: () => radius,
  shadows: () => shadows,
  spacing: () => spacing,
  styles: () => styles,
  theme: () => theme,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/tokens/colors.ts
var colors = {
  // Brand Colors
  primary: "#6246EA",
  secondary: "#A594F9",
  tertiary: "#494553",
  accent: "#00B5E2",
  // Semantic Colors
  success: "#34A853",
  warning: "#F9AB00",
  error: "#EA4335",
  info: "#00B5E2",
  // Background Colors
  background: {
    primary: "#1A1A1A",
    secondary: "#2B2B2B",
    tertiary: "#494553"
  },
  // Text Colors
  text: {
    primary: "#FFFFFF",
    secondary: "#B3B3B3",
    disabled: "#555555"
  },
  // Border Colors
  border: {
    default: "#444444",
    secondary: "#333333"
  },
  // Surface Colors
  surface: "#2B2B2B",
  overlay: "rgba(0, 0, 0, 0.5)",
  // Component States
  states: {
    hover: "rgba(255, 255, 255, 0.1)",
    active: "rgba(255, 255, 255, 0.2)",
    focus: "rgba(98, 70, 234, 0.4)",
    disabled: "rgba(255, 255, 255, 0.1)"
  },
  // Component-specific Colors
  button: {
    primary: "#6246EA",
    secondary: "#A594F9",
    ghost: "transparent",
    danger: "#EA4335",
    text: "#FFFFFF",
    hover: {
      primary: "#7E6BEE",
      secondary: "#BEB0FA",
      ghost: "rgba(255, 255, 255, 0.1)",
      danger: "#F04B3E"
    },
    active: {
      primary: "#4E38BB",
      secondary: "#8C7AC7",
      ghost: "rgba(255, 255, 255, 0.2)",
      danger: "#BB362C"
    },
    disabled: {
      background: "#333333",
      text: "#555555"
    }
  },
  input: {
    background: "#2B2B2B",
    border: "#444444",
    placeholder: "#555555",
    focus: {
      border: "#6246EA",
      shadow: "rgba(98, 70, 234, 0.2)"
    },
    error: {
      border: "#EA4335",
      shadow: "rgba(234, 67, 53, 0.2)"
    },
    disabled: {
      background: "#1A1A1A",
      border: "#333333",
      text: "#555555"
    }
  },
  card: {
    background: "#2B2B2B",
    border: "#444444",
    hover: {
      border: "#555555"
    }
  },
  dropdown: {
    background: "#2B2B2B",
    border: "#444444",
    hover: {
      background: "rgba(255, 255, 255, 0.1)"
    },
    selected: {
      background: "#6246EA",
      text: "#FFFFFF"
    }
  }
};

// src/tokens/typography.ts
var typography = {
  fonts: {
    base: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'Fira Code, Consolas, Monaco, "Andale Mono", monospace'
  },
  fontSizes: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    h1: "24px",
    h2: "20px",
    h3: "18px"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600
  },
  lineHeights: {
    base: 1.4,
    relaxed: 1.6
  },
  letterSpacings: {
    tight: "-0.01em",
    normal: "0",
    wide: "0.01em"
  }
};

// src/tokens/layout.ts
var layout = {
  spacing: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    xxl: "24px"
  },
  radius: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "10px",
    xl: "12px",
    pill: "9999px"
  },
  shadows: {
    sm: "0px 1px 3px rgba(0, 0, 0, 0.12)",
    md: "0px 2px 6px rgba(0, 0, 0, 0.16)",
    lg: "0px 4px 12px rgba(0, 0, 0, 0.18)"
  },
  borders: {
    width: "1px",
    style: "solid"
  },
  zIndex: {
    base: 1,
    dropdown: 1e3,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600
  },
  components: {
    // Button Component
    button: {
      height: {
        sm: "30px",
        md: "36px",
        lg: "42px"
      },
      padding: {
        horizontal: "12px"
      },
      gap: "8px",
      iconSize: {
        sm: "14px",
        md: "16px",
        lg: "18px"
      },
      states: {
        hover: {
          opacity: 0.9
        },
        active: {
          opacity: 0.8
        },
        disabled: {
          opacity: 0.5
        }
      }
    },
    // Input Component
    input: {
      height: {
        sm: "30px",
        md: "36px",
        lg: "42px"
      },
      padding: {
        horizontal: "12px"
      },
      iconSize: {
        sm: "14px",
        md: "16px",
        lg: "18px"
      },
      states: {
        focus: {
          shadowSpread: "3px"
        },
        error: {
          borderWidth: "2px"
        }
      }
    },
    // Select Component
    select: {
      height: {
        sm: "30px",
        md: "36px",
        lg: "42px"
      },
      padding: {
        horizontal: "12px"
      },
      menuMaxHeight: "300px",
      optionHeight: "36px",
      chevronSize: "16px"
    },
    // Card Component
    card: {
      padding: "12px",
      gap: "16px",
      headerPadding: "16px",
      bodyPadding: "16px",
      footerPadding: "16px"
    },
    // Chat Message Component
    chatMessage: {
      bubble: {
        borderRadius: "8px",
        maxWidth: "70%"
      },
      padding: "12px",
      avatar: {
        size: "28px",
        gap: "12px"
      },
      spacing: "8px",
      timestamp: {
        fontSize: "12px",
        opacity: 0.7
      },
      actions: {
        gap: "8px",
        iconSize: "16px"
      }
    },
    // Trace Components
    traceStep: {
      padding: "12px",
      borderRadius: "4px",
      indent: "20px",
      iconSize: "16px",
      gap: "8px",
      states: {
        hover: {
          opacity: 0.9
        },
        selected: {
          borderWidth: "2px"
        }
      }
    },
    traceThought: {
      padding: "4px",
      margin: "4px 0",
      fontSize: "13px"
    },
    // Modal Component
    modal: {
      padding: "24px",
      borderRadius: "8px",
      gap: "16px",
      width: {
        sm: "400px",
        md: "600px",
        lg: "800px"
      },
      header: {
        height: "48px",
        padding: "0 24px"
      },
      footer: {
        height: "64px",
        padding: "0 24px"
      }
    },
    // Toolbar Component
    toolbar: {
      height: "48px",
      padding: "0 16px",
      gap: "8px",
      buttonSize: "32px",
      iconSize: "16px",
      states: {
        hover: {
          opacity: 0.9
        },
        active: {
          opacity: 0.8
        }
      }
    },
    // Settings Panel Component
    settingsPanel: {
      width: "400px",
      padding: "24px",
      gap: "24px",
      header: {
        height: "48px",
        padding: "0 24px"
      },
      section: {
        gap: "16px",
        titleSize: "18px"
      },
      option: {
        gap: "8px",
        labelSize: "14px",
        descriptionSize: "12px"
      }
    },
    // Dropdown Component
    dropdown: {
      minWidth: "180px",
      maxHeight: "300px",
      padding: "4px",
      itemHeight: "36px",
      itemPadding: "0 12px",
      gap: "4px",
      states: {
        hover: {
          opacity: 0.9
        },
        selected: {
          opacity: 0.8
        }
      }
    }
  }
};

// src/tokens/spacing.ts
var spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  // 2px
  1: "0.25rem",
  // 4px
  1.5: "0.375rem",
  // 6px
  2: "0.5rem",
  // 8px
  2.5: "0.625rem",
  // 10px
  3: "0.75rem",
  // 12px
  3.5: "0.875rem",
  // 14px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  7: "1.75rem",
  // 28px
  8: "2rem",
  // 32px
  9: "2.25rem",
  // 36px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  14: "3.5rem",
  // 56px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem",
  // 96px
  28: "7rem",
  // 112px
  32: "8rem",
  // 128px
  36: "9rem",
  // 144px
  40: "10rem",
  // 160px
  44: "11rem",
  // 176px
  48: "12rem",
  // 192px
  52: "13rem",
  // 208px
  56: "14rem",
  // 224px
  60: "15rem",
  // 240px
  64: "16rem",
  // 256px
  72: "18rem",
  // 288px
  80: "20rem",
  // 320px
  96: "24rem"
  // 384px
};

// src/tokens/radius.ts
var radius = {
  none: "0",
  sm: "0.125rem",
  // 2px
  base: "0.25rem",
  // 4px
  md: "0.375rem",
  // 6px
  lg: "0.5rem",
  // 8px
  xl: "0.75rem",
  // 12px
  "2xl": "1rem",
  // 16px
  "3xl": "1.5rem",
  // 24px
  full: "9999px"
};

// src/tokens/shadows.ts
var shadows = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  none: "none"
};

// src/tokens/index.ts
var theme = {
  colors,
  ...typography,
  ...layout,
  ...spacing,
  ...radius,
  ...shadows
};

// src/styles/index.ts
var styles = {
  // Add any style-related utilities here
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  layout,
  radius,
  shadows,
  spacing,
  styles,
  theme,
  typography
});
