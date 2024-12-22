declare const colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    text: {
        primary: string;
        secondary: string;
        disabled: string;
    };
    border: {
        default: string;
        secondary: string;
    };
    surface: string;
    overlay: string;
    states: {
        hover: string;
        active: string;
        focus: string;
        disabled: string;
    };
    button: {
        primary: string;
        secondary: string;
        ghost: string;
        danger: string;
        text: string;
        hover: {
            primary: string;
            secondary: string;
            ghost: string;
            danger: string;
        };
        active: {
            primary: string;
            secondary: string;
            ghost: string;
            danger: string;
        };
        disabled: {
            background: string;
            text: string;
        };
    };
    input: {
        background: string;
        border: string;
        placeholder: string;
        focus: {
            border: string;
            shadow: string;
        };
        error: {
            border: string;
            shadow: string;
        };
        disabled: {
            background: string;
            border: string;
            text: string;
        };
    };
    card: {
        background: string;
        border: string;
        hover: {
            border: string;
        };
    };
    dropdown: {
        background: string;
        border: string;
        hover: {
            background: string;
        };
        selected: {
            background: string;
            text: string;
        };
    };
};
type Colors = typeof colors;

declare const typography: {
    readonly fonts: {
        readonly base: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
        readonly mono: "Fira Code, Consolas, Monaco, \"Andale Mono\", monospace";
    };
    readonly fontSizes: {
        readonly xs: "12px";
        readonly sm: "13px";
        readonly md: "14px";
        readonly lg: "16px";
        readonly xl: "18px";
        readonly h1: "24px";
        readonly h2: "20px";
        readonly h3: "18px";
    };
    readonly fontWeights: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
    };
    readonly lineHeights: {
        readonly base: 1.4;
        readonly relaxed: 1.6;
    };
    readonly letterSpacings: {
        readonly tight: "-0.01em";
        readonly normal: "0";
        readonly wide: "0.01em";
    };
};
type Typography = typeof typography;

declare const layout: {
    readonly spacing: {
        readonly xxs: "2px";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly xxl: "24px";
    };
    readonly radius: {
        readonly xs: "2px";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "10px";
        readonly xl: "12px";
        readonly pill: "9999px";
    };
    readonly shadows: {
        readonly sm: "0px 1px 3px rgba(0, 0, 0, 0.12)";
        readonly md: "0px 2px 6px rgba(0, 0, 0, 0.16)";
        readonly lg: "0px 4px 12px rgba(0, 0, 0, 0.18)";
    };
    readonly borders: {
        readonly width: "1px";
        readonly style: "solid";
    };
    readonly zIndex: {
        readonly base: 1;
        readonly dropdown: 1000;
        readonly sticky: 1100;
        readonly fixed: 1200;
        readonly overlay: 1300;
        readonly modal: 1400;
        readonly popover: 1500;
        readonly tooltip: 1600;
    };
    readonly components: {
        readonly button: {
            readonly height: {
                readonly sm: "30px";
                readonly md: "36px";
                readonly lg: "42px";
            };
            readonly padding: {
                readonly horizontal: "12px";
            };
            readonly gap: "8px";
            readonly iconSize: {
                readonly sm: "14px";
                readonly md: "16px";
                readonly lg: "18px";
            };
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly active: {
                    readonly opacity: 0.8;
                };
                readonly disabled: {
                    readonly opacity: 0.5;
                };
            };
        };
        readonly input: {
            readonly height: {
                readonly sm: "30px";
                readonly md: "36px";
                readonly lg: "42px";
            };
            readonly padding: {
                readonly horizontal: "12px";
            };
            readonly iconSize: {
                readonly sm: "14px";
                readonly md: "16px";
                readonly lg: "18px";
            };
            readonly states: {
                readonly focus: {
                    readonly shadowSpread: "3px";
                };
                readonly error: {
                    readonly borderWidth: "2px";
                };
            };
        };
        readonly select: {
            readonly height: {
                readonly sm: "30px";
                readonly md: "36px";
                readonly lg: "42px";
            };
            readonly padding: {
                readonly horizontal: "12px";
            };
            readonly menuMaxHeight: "300px";
            readonly optionHeight: "36px";
            readonly chevronSize: "16px";
        };
        readonly card: {
            readonly padding: "12px";
            readonly gap: "16px";
            readonly headerPadding: "16px";
            readonly bodyPadding: "16px";
            readonly footerPadding: "16px";
        };
        readonly chatMessage: {
            readonly bubble: {
                readonly borderRadius: "8px";
                readonly maxWidth: "70%";
            };
            readonly padding: "12px";
            readonly avatar: {
                readonly size: "28px";
                readonly gap: "12px";
            };
            readonly spacing: "8px";
            readonly timestamp: {
                readonly fontSize: "12px";
                readonly opacity: 0.7;
            };
            readonly actions: {
                readonly gap: "8px";
                readonly iconSize: "16px";
            };
        };
        readonly traceStep: {
            readonly padding: "12px";
            readonly borderRadius: "4px";
            readonly indent: "20px";
            readonly iconSize: "16px";
            readonly gap: "8px";
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly selected: {
                    readonly borderWidth: "2px";
                };
            };
        };
        readonly traceThought: {
            readonly padding: "4px";
            readonly margin: "4px 0";
            readonly fontSize: "13px";
        };
        readonly modal: {
            readonly padding: "24px";
            readonly borderRadius: "8px";
            readonly gap: "16px";
            readonly width: {
                readonly sm: "400px";
                readonly md: "600px";
                readonly lg: "800px";
            };
            readonly header: {
                readonly height: "48px";
                readonly padding: "0 24px";
            };
            readonly footer: {
                readonly height: "64px";
                readonly padding: "0 24px";
            };
        };
        readonly toolbar: {
            readonly height: "48px";
            readonly padding: "0 16px";
            readonly gap: "8px";
            readonly buttonSize: "32px";
            readonly iconSize: "16px";
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly active: {
                    readonly opacity: 0.8;
                };
            };
        };
        readonly settingsPanel: {
            readonly width: "400px";
            readonly padding: "24px";
            readonly gap: "24px";
            readonly header: {
                readonly height: "48px";
                readonly padding: "0 24px";
            };
            readonly section: {
                readonly gap: "16px";
                readonly titleSize: "18px";
            };
            readonly option: {
                readonly gap: "8px";
                readonly labelSize: "14px";
                readonly descriptionSize: "12px";
            };
        };
        readonly dropdown: {
            readonly minWidth: "180px";
            readonly maxHeight: "300px";
            readonly padding: "4px";
            readonly itemHeight: "36px";
            readonly itemPadding: "0 12px";
            readonly gap: "4px";
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly selected: {
                    readonly opacity: 0.8;
                };
            };
        };
    };
};
type Layout = typeof layout;

declare const spacing: {
    readonly px: "1px";
    readonly 0: "0";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 1.5: "0.375rem";
    readonly 2: "0.5rem";
    readonly 2.5: "0.625rem";
    readonly 3: "0.75rem";
    readonly 3.5: "0.875rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 9: "2.25rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 14: "3.5rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly 28: "7rem";
    readonly 32: "8rem";
    readonly 36: "9rem";
    readonly 40: "10rem";
    readonly 44: "11rem";
    readonly 48: "12rem";
    readonly 52: "13rem";
    readonly 56: "14rem";
    readonly 60: "15rem";
    readonly 64: "16rem";
    readonly 72: "18rem";
    readonly 80: "20rem";
    readonly 96: "24rem";
};

declare const radius: {
    readonly none: "0";
    readonly sm: "0.125rem";
    readonly base: "0.25rem";
    readonly md: "0.375rem";
    readonly lg: "0.5rem";
    readonly xl: "0.75rem";
    readonly '2xl': "1rem";
    readonly '3xl': "1.5rem";
    readonly full: "9999px";
};

declare const shadows: {
    readonly xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
    readonly none: "none";
};

declare const theme: {
    readonly xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly '2xl': "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    readonly inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)";
    readonly none: "none";
    readonly base: "0.25rem";
    readonly '3xl': "1.5rem";
    readonly full: "9999px";
    readonly px: "1px";
    readonly 0: "0";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 1.5: "0.375rem";
    readonly 2: "0.5rem";
    readonly 2.5: "0.625rem";
    readonly 3: "0.75rem";
    readonly 3.5: "0.875rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 7: "1.75rem";
    readonly 8: "2rem";
    readonly 9: "2.25rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
    readonly 14: "3.5rem";
    readonly 16: "4rem";
    readonly 20: "5rem";
    readonly 24: "6rem";
    readonly 28: "7rem";
    readonly 32: "8rem";
    readonly 36: "9rem";
    readonly 40: "10rem";
    readonly 44: "11rem";
    readonly 48: "12rem";
    readonly 52: "13rem";
    readonly 56: "14rem";
    readonly 60: "15rem";
    readonly 64: "16rem";
    readonly 72: "18rem";
    readonly 80: "20rem";
    readonly 96: "24rem";
    readonly spacing: {
        readonly xxs: "2px";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly xxl: "24px";
    };
    readonly radius: {
        readonly xs: "2px";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "10px";
        readonly xl: "12px";
        readonly pill: "9999px";
    };
    readonly shadows: {
        readonly sm: "0px 1px 3px rgba(0, 0, 0, 0.12)";
        readonly md: "0px 2px 6px rgba(0, 0, 0, 0.16)";
        readonly lg: "0px 4px 12px rgba(0, 0, 0, 0.18)";
    };
    readonly borders: {
        readonly width: "1px";
        readonly style: "solid";
    };
    readonly zIndex: {
        readonly base: 1;
        readonly dropdown: 1000;
        readonly sticky: 1100;
        readonly fixed: 1200;
        readonly overlay: 1300;
        readonly modal: 1400;
        readonly popover: 1500;
        readonly tooltip: 1600;
    };
    readonly components: {
        readonly button: {
            readonly height: {
                readonly sm: "30px";
                readonly md: "36px";
                readonly lg: "42px";
            };
            readonly padding: {
                readonly horizontal: "12px";
            };
            readonly gap: "8px";
            readonly iconSize: {
                readonly sm: "14px";
                readonly md: "16px";
                readonly lg: "18px";
            };
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly active: {
                    readonly opacity: 0.8;
                };
                readonly disabled: {
                    readonly opacity: 0.5;
                };
            };
        };
        readonly input: {
            readonly height: {
                readonly sm: "30px";
                readonly md: "36px";
                readonly lg: "42px";
            };
            readonly padding: {
                readonly horizontal: "12px";
            };
            readonly iconSize: {
                readonly sm: "14px";
                readonly md: "16px";
                readonly lg: "18px";
            };
            readonly states: {
                readonly focus: {
                    readonly shadowSpread: "3px";
                };
                readonly error: {
                    readonly borderWidth: "2px";
                };
            };
        };
        readonly select: {
            readonly height: {
                readonly sm: "30px";
                readonly md: "36px";
                readonly lg: "42px";
            };
            readonly padding: {
                readonly horizontal: "12px";
            };
            readonly menuMaxHeight: "300px";
            readonly optionHeight: "36px";
            readonly chevronSize: "16px";
        };
        readonly card: {
            readonly padding: "12px";
            readonly gap: "16px";
            readonly headerPadding: "16px";
            readonly bodyPadding: "16px";
            readonly footerPadding: "16px";
        };
        readonly chatMessage: {
            readonly bubble: {
                readonly borderRadius: "8px";
                readonly maxWidth: "70%";
            };
            readonly padding: "12px";
            readonly avatar: {
                readonly size: "28px";
                readonly gap: "12px";
            };
            readonly spacing: "8px";
            readonly timestamp: {
                readonly fontSize: "12px";
                readonly opacity: 0.7;
            };
            readonly actions: {
                readonly gap: "8px";
                readonly iconSize: "16px";
            };
        };
        readonly traceStep: {
            readonly padding: "12px";
            readonly borderRadius: "4px";
            readonly indent: "20px";
            readonly iconSize: "16px";
            readonly gap: "8px";
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly selected: {
                    readonly borderWidth: "2px";
                };
            };
        };
        readonly traceThought: {
            readonly padding: "4px";
            readonly margin: "4px 0";
            readonly fontSize: "13px";
        };
        readonly modal: {
            readonly padding: "24px";
            readonly borderRadius: "8px";
            readonly gap: "16px";
            readonly width: {
                readonly sm: "400px";
                readonly md: "600px";
                readonly lg: "800px";
            };
            readonly header: {
                readonly height: "48px";
                readonly padding: "0 24px";
            };
            readonly footer: {
                readonly height: "64px";
                readonly padding: "0 24px";
            };
        };
        readonly toolbar: {
            readonly height: "48px";
            readonly padding: "0 16px";
            readonly gap: "8px";
            readonly buttonSize: "32px";
            readonly iconSize: "16px";
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly active: {
                    readonly opacity: 0.8;
                };
            };
        };
        readonly settingsPanel: {
            readonly width: "400px";
            readonly padding: "24px";
            readonly gap: "24px";
            readonly header: {
                readonly height: "48px";
                readonly padding: "0 24px";
            };
            readonly section: {
                readonly gap: "16px";
                readonly titleSize: "18px";
            };
            readonly option: {
                readonly gap: "8px";
                readonly labelSize: "14px";
                readonly descriptionSize: "12px";
            };
        };
        readonly dropdown: {
            readonly minWidth: "180px";
            readonly maxHeight: "300px";
            readonly padding: "4px";
            readonly itemHeight: "36px";
            readonly itemPadding: "0 12px";
            readonly gap: "4px";
            readonly states: {
                readonly hover: {
                    readonly opacity: 0.9;
                };
                readonly selected: {
                    readonly opacity: 0.8;
                };
            };
        };
    };
    readonly fonts: {
        readonly base: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif";
        readonly mono: "Fira Code, Consolas, Monaco, \"Andale Mono\", monospace";
    };
    readonly fontSizes: {
        readonly xs: "12px";
        readonly sm: "13px";
        readonly md: "14px";
        readonly lg: "16px";
        readonly xl: "18px";
        readonly h1: "24px";
        readonly h2: "20px";
        readonly h3: "18px";
    };
    readonly fontWeights: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
    };
    readonly lineHeights: {
        readonly base: 1.4;
        readonly relaxed: 1.6;
    };
    readonly letterSpacings: {
        readonly tight: "-0.01em";
        readonly normal: "0";
        readonly wide: "0.01em";
    };
    readonly colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        accent: string;
        success: string;
        warning: string;
        error: string;
        info: string;
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
        };
        border: {
            default: string;
            secondary: string;
        };
        surface: string;
        overlay: string;
        states: {
            hover: string;
            active: string;
            focus: string;
            disabled: string;
        };
        button: {
            primary: string;
            secondary: string;
            ghost: string;
            danger: string;
            text: string;
            hover: {
                primary: string;
                secondary: string;
                ghost: string;
                danger: string;
            };
            active: {
                primary: string;
                secondary: string;
                ghost: string;
                danger: string;
            };
            disabled: {
                background: string;
                text: string;
            };
        };
        input: {
            background: string;
            border: string;
            placeholder: string;
            focus: {
                border: string;
                shadow: string;
            };
            error: {
                border: string;
                shadow: string;
            };
            disabled: {
                background: string;
                border: string;
                text: string;
            };
        };
        card: {
            background: string;
            border: string;
            hover: {
                border: string;
            };
        };
        dropdown: {
            background: string;
            border: string;
            hover: {
                background: string;
            };
            selected: {
                background: string;
                text: string;
            };
        };
    };
};
type Theme = typeof theme;

declare const styles: {};

export { type Colors, type Layout, type Theme, type Typography, colors, layout, radius, shadows, spacing, styles, theme, typography };
