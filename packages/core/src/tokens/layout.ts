export const layout = {
  spacing: {
    xxs: '2px',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
  },

  radius: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '10px',
    xl: '12px',
    pill: '9999px',
  },

  shadows: {
    sm: '0px 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0px 2px 6px rgba(0, 0, 0, 0.16)',
    lg: '0px 4px 12px rgba(0, 0, 0, 0.18)',
  },

  borders: {
    width: '1px',
    style: 'solid',
  },

  zIndex: {
    base: 1,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },

  components: {
    // Button Component
    button: {
      height: {
        sm: '30px',
        md: '36px',
        lg: '42px',
      },
      padding: {
        horizontal: '12px',
      },
      gap: '8px',
      iconSize: {
        sm: '14px',
        md: '16px',
        lg: '18px',
      },
      states: {
        hover: {
          opacity: 0.9,
        },
        active: {
          opacity: 0.8,
        },
        disabled: {
          opacity: 0.5,
        },
      },
    },

    // Input Component
    input: {
      height: {
        sm: '30px',
        md: '36px',
        lg: '42px',
      },
      padding: {
        horizontal: '12px',
      },
      iconSize: {
        sm: '14px',
        md: '16px',
        lg: '18px',
      },
      states: {
        focus: {
          shadowSpread: '3px',
        },
        error: {
          borderWidth: '2px',
        },
      },
    },

    // Select Component
    select: {
      height: {
        sm: '30px',
        md: '36px',
        lg: '42px',
      },
      padding: {
        horizontal: '12px',
      },
      menuMaxHeight: '300px',
      optionHeight: '36px',
      chevronSize: '16px',
    },

    // Card Component
    card: {
      padding: '12px',
      gap: '16px',
      headerPadding: '16px',
      bodyPadding: '16px',
      footerPadding: '16px',
    },

    // Chat Message Component
    chatMessage: {
      bubble: {
        borderRadius: '8px',
        maxWidth: '70%',
      },
      padding: '12px',
      avatar: {
        size: '28px',
        gap: '12px',
      },
      spacing: '8px',
      timestamp: {
        fontSize: '12px',
        opacity: 0.7,
      },
      actions: {
        gap: '8px',
        iconSize: '16px',
      },
    },

    // Trace Components
    traceStep: {
      padding: '12px',
      borderRadius: '4px',
      indent: '20px',
      iconSize: '16px',
      gap: '8px',
      states: {
        hover: {
          opacity: 0.9,
        },
        selected: {
          borderWidth: '2px',
        },
      },
    },

    traceThought: {
      padding: '4px',
      margin: '4px 0',
      fontSize: '13px',
    },

    // Modal Component
    modal: {
      padding: '24px',
      borderRadius: '8px',
      gap: '16px',
      width: {
        sm: '400px',
        md: '600px',
        lg: '800px',
      },
      header: {
        height: '48px',
        padding: '0 24px',
      },
      footer: {
        height: '64px',
        padding: '0 24px',
      },
    },

    // Toolbar Component
    toolbar: {
      height: '48px',
      padding: '0 16px',
      gap: '8px',
      buttonSize: '32px',
      iconSize: '16px',
      states: {
        hover: {
          opacity: 0.9,
        },
        active: {
          opacity: 0.8,
        },
      },
    },

    // Settings Panel Component
    settingsPanel: {
      width: '400px',
      padding: '24px',
      gap: '24px',
      header: {
        height: '48px',
        padding: '0 24px',
      },
      section: {
        gap: '16px',
        titleSize: '18px',
      },
      option: {
        gap: '8px',
        labelSize: '14px',
        descriptionSize: '12px',
      },
    },

    // Dropdown Component
    dropdown: {
      minWidth: '180px',
      maxHeight: '300px',
      padding: '4px',
      itemHeight: '36px',
      itemPadding: '0 12px',
      gap: '4px',
      states: {
        hover: {
          opacity: 0.9,
        },
        selected: {
          opacity: 0.8,
        },
      },
    },
  },
} as const;

export type Layout = typeof layout;
