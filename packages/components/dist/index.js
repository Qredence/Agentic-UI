"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AgentConversation: () => AgentConversation,
  AgentMessage: () => AgentMessage,
  Button: () => Button,
  Collapse: () => Collapse,
  SettingsPanel: () => SettingsPanel,
  Toolbar: () => Toolbar,
  TracingPanel: () => TracingPanel
});
module.exports = __toCommonJS(index_exports);

// src/Button/Button.tsx
var import_react = __toESM(require("react"));
var import_core = require("@agentic-ui/core");
var Button = import_react.default.forwardRef(
  ({
    variant = "primary",
    size = "md",
    isLoading,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  }, ref) => {
    const variantStyle = import_core.theme.components.Button.variants[variant];
    const sizeStyle = import_core.theme.components.Button.sizes[size];
    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: import_core.theme.radius.base,
      fontWeight: import_core.theme.fontWeights.medium,
      transition: "all 0.2s",
      cursor: disabled || isLoading ? "not-allowed" : "pointer",
      opacity: disabled || isLoading ? 0.6 : 1,
      gap: import_core.theme.spacing[2],
      ...variantStyle,
      ...sizeStyle
    };
    return /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        ref,
        disabled: disabled || isLoading,
        style: baseStyles,
        ...props
      },
      leftIcon && /* @__PURE__ */ import_react.default.createElement("span", null, leftIcon),
      isLoading ? "Loading..." : children,
      rightIcon && /* @__PURE__ */ import_react.default.createElement("span", null, rightIcon)
    );
  }
);

// src/AgentMessage/AgentMessage.tsx
var import_react3 = __toESM(require("react"));
var import_core2 = require("@agentic-ui/core");

// src/Collapse/Collapse.tsx
var import_react2 = __toESM(require("react"));
var import_framer_motion = require("framer-motion");
var Collapse = ({
  isOpen,
  children,
  duration = 0.2,
  animationType = "height",
  className,
  style
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      case "slide":
        return {
          initial: { height: 0, opacity: 0, y: -10 },
          animate: { height: "auto", opacity: 1, y: 0 },
          exit: { height: 0, opacity: 0, y: -10 }
        };
      case "scale":
        return {
          initial: { scale: 0.95, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.95, opacity: 0 }
        };
      case "height":
      default:
        return {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 }
        };
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(import_framer_motion.AnimatePresence, { initial: false }, isOpen && /* @__PURE__ */ import_react2.default.createElement(
    import_framer_motion.motion.div,
    {
      className,
      style: {
        overflow: "hidden",
        ...style
      },
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: getAnimation(),
      transition: {
        duration,
        ease: "easeInOut"
      }
    },
    children
  ));
};

// src/AgentMessage/AgentMessage.tsx
var AgentMessage = ({
  role,
  content,
  avatar,
  timestamp,
  reasoning,
  toolCalls,
  onReasoningExpand,
  onToolCallExpand,
  className,
  style
}) => {
  const messageStyles = {
    display: "flex",
    gap: import_core2.theme.spacing.md,
    padding: import_core2.theme.spacing.md,
    backgroundColor: import_core2.theme.colors.background.secondary,
    borderRadius: import_core2.theme.radius.lg,
    color: import_core2.theme.colors.text.primary,
    ...style
  };
  const avatarStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: import_core2.theme.colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  };
  const contentStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: import_core2.theme.spacing.sm
  };
  const expandableStyles = {
    backgroundColor: import_core2.theme.colors.background.tertiary,
    borderRadius: import_core2.theme.radius.md,
    padding: import_core2.theme.spacing.md,
    marginTop: import_core2.theme.spacing.sm,
    cursor: "pointer"
  };
  return /* @__PURE__ */ import_react3.default.createElement("div", { className, style: messageStyles }, /* @__PURE__ */ import_react3.default.createElement("div", { style: avatarStyles }, typeof avatar === "string" ? /* @__PURE__ */ import_react3.default.createElement("img", { src: avatar, alt: `${role} avatar`, style: { width: "100%", height: "100%", borderRadius: "50%" } }) : avatar || role.charAt(0).toUpperCase()), /* @__PURE__ */ import_react3.default.createElement("div", { style: contentStyles }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontSize: import_core2.theme.typography.sm, color: import_core2.theme.colors.text.secondary } }, role.charAt(0).toUpperCase() + role.slice(1), timestamp && /* @__PURE__ */ import_react3.default.createElement("span", { style: { marginLeft: import_core2.theme.spacing.sm } }, timestamp)), /* @__PURE__ */ import_react3.default.createElement("div", { style: { fontSize: import_core2.theme.typography.md } }, content), reasoning && /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      style: expandableStyles,
      onClick: onReasoningExpand
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ import_react3.default.createElement("span", null, "Reasoning"), /* @__PURE__ */ import_react3.default.createElement("span", null, reasoning.isExpanded ? "\u25BC" : "\u25B6")),
    /* @__PURE__ */ import_react3.default.createElement(Collapse, { isOpen: reasoning.isExpanded || false }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { color: import_core2.theme.colors.text.secondary, marginTop: import_core2.theme.spacing.sm } }, reasoning.thoughts.map((thought, index) => /* @__PURE__ */ import_react3.default.createElement("div", { key: index, style: { marginBottom: import_core2.theme.spacing.sm } }, thought))))
  ), toolCalls == null ? void 0 : toolCalls.map((toolCall, index) => /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      key: index,
      style: expandableStyles,
      onClick: () => onToolCallExpand == null ? void 0 : onToolCallExpand(index)
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ import_react3.default.createElement("span", null, toolCall.tool), /* @__PURE__ */ import_react3.default.createElement("span", null, toolCall.isExpanded ? "\u25BC" : "\u25B6")),
    /* @__PURE__ */ import_react3.default.createElement(Collapse, { isOpen: toolCall.isExpanded || false }, /* @__PURE__ */ import_react3.default.createElement("div", { style: { color: import_core2.theme.colors.text.secondary, marginTop: import_core2.theme.spacing.sm } }, /* @__PURE__ */ import_react3.default.createElement("pre", { style: {
      fontFamily: "monospace",
      fontSize: import_core2.theme.typography.sm,
      overflow: "auto",
      padding: import_core2.theme.spacing.sm,
      backgroundColor: import_core2.theme.colors.background.primary,
      borderRadius: import_core2.theme.radius.sm,
      margin: `${import_core2.theme.spacing.sm} 0`
    } }, JSON.stringify(toolCall.args, null, 2)), toolCall.result && /* @__PURE__ */ import_react3.default.createElement("pre", { style: {
      fontFamily: "monospace",
      fontSize: import_core2.theme.typography.sm,
      overflow: "auto",
      padding: import_core2.theme.spacing.sm,
      backgroundColor: import_core2.theme.colors.background.primary,
      borderRadius: import_core2.theme.radius.sm
    } }, toolCall.result)))
  ))));
};

// src/TracingPanel/TracingPanel.tsx
var import_react4 = __toESM(require("react"));
var import_core3 = require("@agentic-ui/core");
var TraceStepComponent = ({ step, depth = 0, onExpand }) => {
  var _a, _b, _c, _d;
  const getTypeColor = (type) => {
    switch (type) {
      case "thought":
        return import_core3.theme.colors.brand[400];
      case "action":
        return import_core3.theme.colors.semantic.success.base;
      case "observation":
        return import_core3.theme.colors.semantic.info.base;
      default:
        return import_core3.theme.colors.text.primary;
    }
  };
  const stepStyles = {
    padding: import_core3.theme.spacing[3],
    paddingLeft: `calc(${import_core3.theme.spacing[3]} + ${depth * 20}px)`,
    borderLeft: ((_a = step.children) == null ? void 0 : _a.length) ? `2px solid ${import_core3.theme.colors.border.default}` : "none",
    position: "relative"
  };
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    gap: import_core3.theme.spacing[2],
    color: getTypeColor(step.type),
    fontSize: import_core3.theme.fontSizes.sm,
    fontWeight: import_core3.theme.fontWeights.medium,
    cursor: ((_b = step.children) == null ? void 0 : _b.length) ? "pointer" : "default"
  };
  const contentStyles = {
    color: import_core3.theme.colors.text.primary,
    fontSize: import_core3.theme.fontSizes.sm,
    marginTop: import_core3.theme.spacing[2],
    lineHeight: import_core3.theme.lineHeights.relaxed
  };
  const timestampStyles = {
    color: import_core3.theme.colors.text.tertiary,
    fontSize: import_core3.theme.fontSizes.xs,
    marginLeft: "auto"
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", { style: stepStyles }, /* @__PURE__ */ import_react4.default.createElement(
    "div",
    {
      style: headerStyles,
      onClick: () => {
        var _a2;
        return ((_a2 = step.children) == null ? void 0 : _a2.length) && (onExpand == null ? void 0 : onExpand(step.id));
      }
    },
    /* @__PURE__ */ import_react4.default.createElement("span", { style: { opacity: 0.7 } }, ((_c = step.children) == null ? void 0 : _c.length) ? step.isExpanded ? "\u25BC" : "\u25B6" : "\u2022"),
    /* @__PURE__ */ import_react4.default.createElement("span", { style: { textTransform: "capitalize" } }, step.type),
    step.timestamp && /* @__PURE__ */ import_react4.default.createElement("span", { style: timestampStyles }, step.timestamp)
  ), /* @__PURE__ */ import_react4.default.createElement("div", { style: contentStyles }, step.content), /* @__PURE__ */ import_react4.default.createElement(Collapse, { isOpen: step.isExpanded || false }, (_d = step.children) == null ? void 0 : _d.map((childStep) => /* @__PURE__ */ import_react4.default.createElement(
    TraceStepComponent,
    {
      key: childStep.id,
      step: childStep,
      depth: depth + 1,
      onExpand
    }
  ))));
};
var TracingPanel = ({
  title = "Tracing",
  steps,
  width = "320px",
  onStepExpand,
  className,
  style
}) => {
  const containerStyles = {
    width,
    height: "100%",
    backgroundColor: import_core3.theme.colors.background.secondary,
    borderLeft: `1px solid ${import_core3.theme.colors.border.default}`,
    display: "flex",
    flexDirection: "column",
    ...style
  };
  const headerStyles = {
    padding: import_core3.theme.spacing[4],
    borderBottom: `1px solid ${import_core3.theme.colors.border.default}`,
    color: import_core3.theme.colors.text.primary,
    fontSize: import_core3.theme.fontSizes.lg,
    fontWeight: import_core3.theme.fontWeights.semibold
  };
  const contentStyles = {
    flex: 1,
    overflowY: "auto"
  };
  return /* @__PURE__ */ import_react4.default.createElement("div", { className, style: containerStyles }, /* @__PURE__ */ import_react4.default.createElement("div", { style: headerStyles }, title), /* @__PURE__ */ import_react4.default.createElement("div", { style: contentStyles }, steps.map((step) => /* @__PURE__ */ import_react4.default.createElement(
    TraceStepComponent,
    {
      key: step.id,
      step,
      onExpand: onStepExpand
    }
  ))));
};

// src/AgentConversation/AgentConversation.tsx
var import_react5 = __toESM(require("react"));
var import_core4 = require("@agentic-ui/core");
var AgentConversation = ({
  messages,
  traceSteps = [],
  onMessageSubmit,
  onReasoningExpand,
  onToolCallExpand,
  onTraceStepExpand,
  showTracing = true,
  className,
  style
}) => {
  const [inputValue, setInputValue] = import_react5.default.useState("");
  const containerStyles = {
    display: "flex",
    height: "100vh",
    backgroundColor: import_core4.theme.colors.background.primary,
    color: import_core4.theme.colors.text.primary,
    ...style
  };
  const chatContainerStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0
    // Prevents flex child from overflowing
  };
  const messagesContainerStyles = {
    flex: 1,
    overflowY: "auto",
    padding: import_core4.theme.spacing[4],
    display: "flex",
    flexDirection: "column",
    gap: import_core4.theme.spacing[4]
  };
  const inputContainerStyles = {
    padding: import_core4.theme.spacing[4],
    borderTop: `1px solid ${import_core4.theme.colors.border.default}`,
    backgroundColor: import_core4.theme.colors.background.secondary
  };
  const inputStyles = {
    width: "100%",
    padding: import_core4.theme.spacing[3],
    backgroundColor: import_core4.theme.colors.background.tertiary,
    border: `1px solid ${import_core4.theme.colors.border.default}`,
    borderRadius: import_core4.theme.radius.lg,
    color: import_core4.theme.colors.text.primary,
    fontSize: import_core4.theme.fontSizes.md,
    outline: "none",
    transition: "border-color 0.2s"
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && onMessageSubmit) {
      onMessageSubmit(inputValue.trim());
      setInputValue("");
    }
  };
  return /* @__PURE__ */ import_react5.default.createElement("div", { className, style: containerStyles }, /* @__PURE__ */ import_react5.default.createElement("div", { style: chatContainerStyles }, /* @__PURE__ */ import_react5.default.createElement("div", { style: messagesContainerStyles }, messages.map((message, index) => /* @__PURE__ */ import_react5.default.createElement(
    AgentMessage,
    {
      key: index,
      ...message,
      onReasoningExpand: () => onReasoningExpand == null ? void 0 : onReasoningExpand(index),
      onToolCallExpand: (toolIndex) => onToolCallExpand == null ? void 0 : onToolCallExpand(index, toolIndex)
    }
  ))), /* @__PURE__ */ import_react5.default.createElement("form", { style: inputContainerStyles, onSubmit: handleSubmit }, /* @__PURE__ */ import_react5.default.createElement(
    "input",
    {
      type: "text",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      placeholder: "Type your message...",
      style: inputStyles
    }
  ))), showTracing && traceSteps.length > 0 && /* @__PURE__ */ import_react5.default.createElement(
    TracingPanel,
    {
      steps: traceSteps,
      onStepExpand: onTraceStepExpand
    }
  ));
};

// src/Toolbar/Toolbar.tsx
var import_react6 = __toESM(require("react"));
var import_core5 = require("@agentic-ui/core");
var Toolbar = ({
  title,
  actions = [],
  position = "top",
  variant = "primary",
  className,
  style
}) => {
  const containerStyles = {
    display: "flex",
    alignItems: "center",
    gap: import_core5.theme.spacing[4],
    padding: `${import_core5.theme.spacing[2]} ${import_core5.theme.spacing[4]}`,
    backgroundColor: variant === "primary" ? import_core5.theme.colors.background.secondary : import_core5.theme.colors.background.tertiary,
    borderBottom: position === "top" ? `1px solid ${import_core5.theme.colors.border.default}` : void 0,
    borderTop: position === "bottom" ? `1px solid ${import_core5.theme.colors.border.default}` : void 0,
    height: "48px",
    ...style
  };
  const titleStyles = {
    color: import_core5.theme.colors.text.primary,
    fontSize: import_core5.theme.fontSizes.sm,
    fontWeight: import_core5.theme.fontWeights.medium,
    marginRight: "auto"
  };
  const actionGroupStyles = {
    display: "flex",
    alignItems: "center",
    gap: import_core5.theme.spacing[1]
  };
  const getActionStyles = (action) => ({
    display: "flex",
    alignItems: "center",
    gap: import_core5.theme.spacing[2],
    padding: `${import_core5.theme.spacing[1]} ${import_core5.theme.spacing[2]}`,
    color: action.isActive ? import_core5.theme.colors.brand[400] : import_core5.theme.colors.text.secondary,
    backgroundColor: action.isActive ? import_core5.theme.colors.background.elevated : "transparent",
    border: "none",
    borderRadius: import_core5.theme.radius.md,
    fontSize: import_core5.theme.fontSizes.sm,
    cursor: action.disabled ? "not-allowed" : "pointer",
    opacity: action.disabled ? 0.5 : 1,
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: !action.disabled && import_core5.theme.colors.background.elevated,
      color: !action.disabled && import_core5.theme.colors.text.primary
    }
  });
  return /* @__PURE__ */ import_react6.default.createElement("div", { className, style: containerStyles }, title && /* @__PURE__ */ import_react6.default.createElement("div", { style: titleStyles }, title), /* @__PURE__ */ import_react6.default.createElement("div", { style: actionGroupStyles }, actions.map((action) => /* @__PURE__ */ import_react6.default.createElement(
    "button",
    {
      key: action.id,
      onClick: action.onClick,
      disabled: action.disabled,
      style: getActionStyles(action),
      title: action.label
    },
    action.icon,
    /* @__PURE__ */ import_react6.default.createElement("span", null, action.label)
  ))));
};

// src/SettingsPanel/SettingsPanel.tsx
var import_react7 = __toESM(require("react"));
var import_framer_motion2 = require("framer-motion");
var import_core6 = require("@agentic-ui/core");

// src/utils/animations.ts
var drawer = {
  initial: (side = "right") => {
    const transforms = {
      left: { x: -100 },
      right: { x: 100 },
      top: { y: -100 },
      bottom: { y: 100 }
    };
    return {
      ...transforms[side],
      opacity: 0
    };
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: (side = "right") => {
    const transforms = {
      left: { x: -100 },
      right: { x: 100 },
      top: { y: -100 },
      bottom: { y: 100 }
    };
    return {
      ...transforms[side],
      opacity: 0
    };
  }
};
var transition = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

// src/SettingsPanel/SettingsPanel.tsx
var SettingsPanel = ({
  isOpen,
  onClose,
  groups,
  position = "right",
  width = "400px",
  className,
  style
}) => {
  const containerStyles = {
    position: "fixed",
    top: 0,
    [position]: 0,
    width,
    height: "100vh",
    backgroundColor: import_core6.theme.colors.background.secondary,
    borderLeft: position === "right" ? `1px solid ${import_core6.theme.colors.border.default}` : void 0,
    borderRight: position === "left" ? `1px solid ${import_core6.theme.colors.border.default}` : void 0,
    zIndex: 1e3,
    ...style
  };
  const headerStyles = {
    padding: import_core6.theme.spacing[4],
    borderBottom: `1px solid ${import_core6.theme.colors.border.default}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };
  const contentStyles = {
    padding: import_core6.theme.spacing[4],
    height: "calc(100vh - 64px)",
    // Header height
    overflowY: "auto"
  };
  const groupStyles = {
    marginBottom: import_core6.theme.spacing[6]
  };
  const optionStyles = {
    marginBottom: import_core6.theme.spacing[4]
  };
  const renderOption = (option) => {
    var _a;
    const baseInputStyles = {
      backgroundColor: import_core6.theme.colors.background.tertiary,
      border: `1px solid ${import_core6.theme.colors.border.default}`,
      borderRadius: import_core6.theme.radius.md,
      padding: import_core6.theme.spacing[2],
      color: import_core6.theme.colors.text.primary,
      width: "100%",
      fontSize: import_core6.theme.fontSizes.sm
    };
    switch (option.type) {
      case "toggle":
        return /* @__PURE__ */ import_react7.default.createElement("label", { style: { display: "flex", alignItems: "center", cursor: "pointer" } }, /* @__PURE__ */ import_react7.default.createElement(
          "input",
          {
            type: "checkbox",
            checked: option.value,
            onChange: (e) => {
              var _a2;
              return (_a2 = option.onChange) == null ? void 0 : _a2.call(option, e.target.checked);
            },
            style: { marginRight: import_core6.theme.spacing[2] }
          }
        ), /* @__PURE__ */ import_react7.default.createElement("span", null, option.label));
      case "select":
        return /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("label", { style: { display: "block", marginBottom: import_core6.theme.spacing[2] } }, option.label), /* @__PURE__ */ import_react7.default.createElement(
          "select",
          {
            value: option.value,
            onChange: (e) => {
              var _a2;
              return (_a2 = option.onChange) == null ? void 0 : _a2.call(option, e.target.value);
            },
            style: baseInputStyles
          },
          (_a = option.options) == null ? void 0 : _a.map((opt) => /* @__PURE__ */ import_react7.default.createElement("option", { key: opt.value, value: opt.value }, opt.label))
        ));
      case "input":
        return /* @__PURE__ */ import_react7.default.createElement("div", null, /* @__PURE__ */ import_react7.default.createElement("label", { style: { display: "block", marginBottom: import_core6.theme.spacing[2] } }, option.label), /* @__PURE__ */ import_react7.default.createElement(
          "input",
          {
            type: "text",
            value: option.value,
            onChange: (e) => {
              var _a2;
              return (_a2 = option.onChange) == null ? void 0 : _a2.call(option, e.target.value);
            },
            style: baseInputStyles
          }
        ));
      case "button":
        return /* @__PURE__ */ import_react7.default.createElement(
          "button",
          {
            onClick: option.onClick,
            style: {
              backgroundColor: import_core6.theme.colors.brand[500],
              color: import_core6.theme.colors.white,
              border: "none",
              borderRadius: import_core6.theme.radius.md,
              padding: `${import_core6.theme.spacing[2]} ${import_core6.theme.spacing[4]}`,
              cursor: "pointer",
              width: "100%",
              fontSize: import_core6.theme.fontSizes.sm,
              fontWeight: import_core6.theme.fontWeights.medium
            }
          },
          option.label
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ import_react7.default.createElement(import_framer_motion2.AnimatePresence, null, isOpen && /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(
    import_framer_motion2.motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 0.5 },
      exit: { opacity: 0 },
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: import_core6.theme.colors.black,
        zIndex: 999
      },
      onClick: onClose
    }
  ), /* @__PURE__ */ import_react7.default.createElement(
    import_framer_motion2.motion.div,
    {
      className,
      style: containerStyles,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: drawer,
      custom: position,
      transition
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { style: headerStyles }, /* @__PURE__ */ import_react7.default.createElement("h2", { style: {
      fontSize: import_core6.theme.fontSizes.xl,
      fontWeight: import_core6.theme.fontWeights.semibold,
      color: import_core6.theme.colors.text.primary
    } }, "Settings"), /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        onClick: onClose,
        style: {
          background: "none",
          border: "none",
          color: import_core6.theme.colors.text.secondary,
          cursor: "pointer",
          fontSize: import_core6.theme.fontSizes.xl
        }
      },
      "\xD7"
    )),
    /* @__PURE__ */ import_react7.default.createElement("div", { style: contentStyles }, groups.map((group) => /* @__PURE__ */ import_react7.default.createElement("div", { key: group.id, style: groupStyles }, /* @__PURE__ */ import_react7.default.createElement("h3", { style: {
      fontSize: import_core6.theme.fontSizes.lg,
      fontWeight: import_core6.theme.fontWeights.medium,
      marginBottom: import_core6.theme.spacing[2],
      color: import_core6.theme.colors.text.primary
    } }, group.title), group.description && /* @__PURE__ */ import_react7.default.createElement("p", { style: {
      fontSize: import_core6.theme.fontSizes.sm,
      color: import_core6.theme.colors.text.secondary,
      marginBottom: import_core6.theme.spacing[4]
    } }, group.description), group.options.map((option) => /* @__PURE__ */ import_react7.default.createElement("div", { key: option.id, style: optionStyles }, renderOption(option), option.description && /* @__PURE__ */ import_react7.default.createElement("p", { style: {
      fontSize: import_core6.theme.fontSizes.xs,
      color: import_core6.theme.colors.text.tertiary,
      marginTop: import_core6.theme.spacing[1]
    } }, option.description))))))
  )));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AgentConversation,
  AgentMessage,
  Button,
  Collapse,
  SettingsPanel,
  Toolbar,
  TracingPanel
});
