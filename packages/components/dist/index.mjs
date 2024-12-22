// src/Button/Button.tsx
import React from "react";
import { theme } from "@agentic-ui/core";
var Button = React.forwardRef(
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
    const variantStyle = theme.components.Button.variants[variant];
    const sizeStyle = theme.components.Button.sizes[size];
    const baseStyles = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.radius.base,
      fontWeight: theme.fontWeights.medium,
      transition: "all 0.2s",
      cursor: disabled || isLoading ? "not-allowed" : "pointer",
      opacity: disabled || isLoading ? 0.6 : 1,
      gap: theme.spacing[2],
      ...variantStyle,
      ...sizeStyle
    };
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        ref,
        disabled: disabled || isLoading,
        style: baseStyles,
        ...props
      },
      leftIcon && /* @__PURE__ */ React.createElement("span", null, leftIcon),
      isLoading ? "Loading..." : children,
      rightIcon && /* @__PURE__ */ React.createElement("span", null, rightIcon)
    );
  }
);

// src/AgentMessage/AgentMessage.tsx
import React3 from "react";
import { theme as theme2 } from "@agentic-ui/core";

// src/Collapse/Collapse.tsx
import React2 from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  return /* @__PURE__ */ React2.createElement(AnimatePresence, { initial: false }, isOpen && /* @__PURE__ */ React2.createElement(
    motion.div,
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
    gap: theme2.spacing[4],
    padding: theme2.spacing[4],
    backgroundColor: theme2.background.secondary,
    borderRadius: theme2.radius.lg,
    color: theme2.text.primary,
    ...style
  };
  const avatarStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: theme2.colors.agent[role],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0
  };
  const contentStyles = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: theme2.spacing[2]
  };
  const expandableStyles = {
    backgroundColor: theme2.background.tertiary,
    borderRadius: theme2.radius.md,
    padding: theme2.spacing[3],
    marginTop: theme2.spacing[2],
    cursor: "pointer"
  };
  return /* @__PURE__ */ React3.createElement("div", { className, style: messageStyles }, /* @__PURE__ */ React3.createElement("div", { style: avatarStyles }, typeof avatar === "string" ? /* @__PURE__ */ React3.createElement("img", { src: avatar, alt: `${role} avatar`, style: { width: "100%", height: "100%", borderRadius: "50%" } }) : avatar || role.charAt(0).toUpperCase()), /* @__PURE__ */ React3.createElement("div", { style: contentStyles }, /* @__PURE__ */ React3.createElement("div", { style: { fontSize: theme2.fontSizes.sm, color: theme2.text.secondary } }, role.charAt(0).toUpperCase() + role.slice(1), timestamp && /* @__PURE__ */ React3.createElement("span", { style: { marginLeft: theme2.spacing[2] } }, timestamp)), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: theme2.fontSizes.md } }, content), reasoning && /* @__PURE__ */ React3.createElement(
    "div",
    {
      style: expandableStyles,
      onClick: onReasoningExpand
    },
    /* @__PURE__ */ React3.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ React3.createElement("span", null, "Reasoning"), /* @__PURE__ */ React3.createElement("span", null, reasoning.isExpanded ? "\u25BC" : "\u25B6")),
    /* @__PURE__ */ React3.createElement(Collapse, { isOpen: reasoning.isExpanded || false }, /* @__PURE__ */ React3.createElement("div", { style: { color: theme2.text.secondary, marginTop: theme2.spacing[2] } }, reasoning.thoughts.map((thought, index) => /* @__PURE__ */ React3.createElement("div", { key: index, style: { marginBottom: theme2.spacing[2] } }, thought))))
  ), toolCalls == null ? void 0 : toolCalls.map((toolCall, index) => /* @__PURE__ */ React3.createElement(
    "div",
    {
      key: index,
      style: expandableStyles,
      onClick: () => onToolCallExpand == null ? void 0 : onToolCallExpand(index)
    },
    /* @__PURE__ */ React3.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    } }, /* @__PURE__ */ React3.createElement("span", null, toolCall.tool), /* @__PURE__ */ React3.createElement("span", null, toolCall.isExpanded ? "\u25BC" : "\u25B6")),
    /* @__PURE__ */ React3.createElement(Collapse, { isOpen: toolCall.isExpanded || false }, /* @__PURE__ */ React3.createElement("div", { style: { color: theme2.text.secondary, marginTop: theme2.spacing[2] } }, /* @__PURE__ */ React3.createElement("pre", { style: {
      fontFamily: theme2.fonts.mono,
      fontSize: theme2.fontSizes.sm,
      overflow: "auto",
      padding: theme2.spacing[2],
      backgroundColor: theme2.background.primary,
      borderRadius: theme2.radius.sm,
      margin: `${theme2.spacing[2]} 0`
    } }, JSON.stringify(toolCall.args, null, 2)), toolCall.result && /* @__PURE__ */ React3.createElement("pre", { style: {
      fontFamily: theme2.fonts.mono,
      fontSize: theme2.fontSizes.sm,
      overflow: "auto",
      padding: theme2.spacing[2],
      backgroundColor: theme2.background.primary,
      borderRadius: theme2.radius.sm
    } }, toolCall.result)))
  ))));
};

// src/TracingPanel/TracingPanel.tsx
import React4 from "react";
import { theme as theme3 } from "@agentic-ui/core";
var TraceStepComponent = ({ step, depth = 0, onExpand }) => {
  var _a, _b, _c, _d;
  const getTypeColor = (type) => {
    switch (type) {
      case "thought":
        return theme3.colors.brand[400];
      case "action":
        return theme3.colors.semantic.success.base;
      case "observation":
        return theme3.colors.semantic.info.base;
      default:
        return theme3.colors.text.primary;
    }
  };
  const stepStyles = {
    padding: theme3.spacing[3],
    paddingLeft: `calc(${theme3.spacing[3]} + ${depth * 20}px)`,
    borderLeft: ((_a = step.children) == null ? void 0 : _a.length) ? `2px solid ${theme3.colors.border.default}` : "none",
    position: "relative"
  };
  const headerStyles = {
    display: "flex",
    alignItems: "center",
    gap: theme3.spacing[2],
    color: getTypeColor(step.type),
    fontSize: theme3.fontSizes.sm,
    fontWeight: theme3.fontWeights.medium,
    cursor: ((_b = step.children) == null ? void 0 : _b.length) ? "pointer" : "default"
  };
  const contentStyles = {
    color: theme3.colors.text.primary,
    fontSize: theme3.fontSizes.sm,
    marginTop: theme3.spacing[2],
    lineHeight: theme3.lineHeights.relaxed
  };
  const timestampStyles = {
    color: theme3.colors.text.tertiary,
    fontSize: theme3.fontSizes.xs,
    marginLeft: "auto"
  };
  return /* @__PURE__ */ React4.createElement("div", { style: stepStyles }, /* @__PURE__ */ React4.createElement(
    "div",
    {
      style: headerStyles,
      onClick: () => {
        var _a2;
        return ((_a2 = step.children) == null ? void 0 : _a2.length) && (onExpand == null ? void 0 : onExpand(step.id));
      }
    },
    /* @__PURE__ */ React4.createElement("span", { style: { opacity: 0.7 } }, ((_c = step.children) == null ? void 0 : _c.length) ? step.isExpanded ? "\u25BC" : "\u25B6" : "\u2022"),
    /* @__PURE__ */ React4.createElement("span", { style: { textTransform: "capitalize" } }, step.type),
    step.timestamp && /* @__PURE__ */ React4.createElement("span", { style: timestampStyles }, step.timestamp)
  ), /* @__PURE__ */ React4.createElement("div", { style: contentStyles }, step.content), /* @__PURE__ */ React4.createElement(Collapse, { isOpen: step.isExpanded || false }, (_d = step.children) == null ? void 0 : _d.map((childStep) => /* @__PURE__ */ React4.createElement(
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
    backgroundColor: theme3.colors.background.secondary,
    borderLeft: `1px solid ${theme3.colors.border.default}`,
    display: "flex",
    flexDirection: "column",
    ...style
  };
  const headerStyles = {
    padding: theme3.spacing[4],
    borderBottom: `1px solid ${theme3.colors.border.default}`,
    color: theme3.colors.text.primary,
    fontSize: theme3.fontSizes.lg,
    fontWeight: theme3.fontWeights.semibold
  };
  const contentStyles = {
    flex: 1,
    overflowY: "auto"
  };
  return /* @__PURE__ */ React4.createElement("div", { className, style: containerStyles }, /* @__PURE__ */ React4.createElement("div", { style: headerStyles }, title), /* @__PURE__ */ React4.createElement("div", { style: contentStyles }, steps.map((step) => /* @__PURE__ */ React4.createElement(
    TraceStepComponent,
    {
      key: step.id,
      step,
      onExpand: onStepExpand
    }
  ))));
};

// src/AgentConversation/AgentConversation.tsx
import React5 from "react";
import { theme as theme4 } from "@agentic-ui/core";
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
  const [inputValue, setInputValue] = React5.useState("");
  const containerStyles = {
    display: "flex",
    height: "100vh",
    backgroundColor: theme4.colors.background.primary,
    color: theme4.colors.text.primary,
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
    padding: theme4.spacing[4],
    display: "flex",
    flexDirection: "column",
    gap: theme4.spacing[4]
  };
  const inputContainerStyles = {
    padding: theme4.spacing[4],
    borderTop: `1px solid ${theme4.colors.border.default}`,
    backgroundColor: theme4.colors.background.secondary
  };
  const inputStyles = {
    width: "100%",
    padding: theme4.spacing[3],
    backgroundColor: theme4.colors.background.tertiary,
    border: `1px solid ${theme4.colors.border.default}`,
    borderRadius: theme4.radius.lg,
    color: theme4.colors.text.primary,
    fontSize: theme4.fontSizes.md,
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
  return /* @__PURE__ */ React5.createElement("div", { className, style: containerStyles }, /* @__PURE__ */ React5.createElement("div", { style: chatContainerStyles }, /* @__PURE__ */ React5.createElement("div", { style: messagesContainerStyles }, messages.map((message, index) => /* @__PURE__ */ React5.createElement(
    AgentMessage,
    {
      key: index,
      ...message,
      onReasoningExpand: () => onReasoningExpand == null ? void 0 : onReasoningExpand(index),
      onToolCallExpand: (toolIndex) => onToolCallExpand == null ? void 0 : onToolCallExpand(index, toolIndex)
    }
  ))), /* @__PURE__ */ React5.createElement("form", { style: inputContainerStyles, onSubmit: handleSubmit }, /* @__PURE__ */ React5.createElement(
    "input",
    {
      type: "text",
      value: inputValue,
      onChange: (e) => setInputValue(e.target.value),
      placeholder: "Type your message...",
      style: inputStyles
    }
  ))), showTracing && traceSteps.length > 0 && /* @__PURE__ */ React5.createElement(
    TracingPanel,
    {
      steps: traceSteps,
      onStepExpand: onTraceStepExpand
    }
  ));
};

// src/Toolbar/Toolbar.tsx
import React6 from "react";
import { theme as theme5 } from "@agentic-ui/core";
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
    gap: theme5.spacing[4],
    padding: `${theme5.spacing[2]} ${theme5.spacing[4]}`,
    backgroundColor: variant === "primary" ? theme5.colors.background.secondary : theme5.colors.background.tertiary,
    borderBottom: position === "top" ? `1px solid ${theme5.colors.border.default}` : void 0,
    borderTop: position === "bottom" ? `1px solid ${theme5.colors.border.default}` : void 0,
    height: "48px",
    ...style
  };
  const titleStyles = {
    color: theme5.colors.text.primary,
    fontSize: theme5.fontSizes.sm,
    fontWeight: theme5.fontWeights.medium,
    marginRight: "auto"
  };
  const actionGroupStyles = {
    display: "flex",
    alignItems: "center",
    gap: theme5.spacing[1]
  };
  const getActionStyles = (action) => ({
    display: "flex",
    alignItems: "center",
    gap: theme5.spacing[2],
    padding: `${theme5.spacing[1]} ${theme5.spacing[2]}`,
    color: action.isActive ? theme5.colors.brand[400] : theme5.colors.text.secondary,
    backgroundColor: action.isActive ? theme5.colors.background.elevated : "transparent",
    border: "none",
    borderRadius: theme5.radius.md,
    fontSize: theme5.fontSizes.sm,
    cursor: action.disabled ? "not-allowed" : "pointer",
    opacity: action.disabled ? 0.5 : 1,
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: !action.disabled && theme5.colors.background.elevated,
      color: !action.disabled && theme5.colors.text.primary
    }
  });
  return /* @__PURE__ */ React6.createElement("div", { className, style: containerStyles }, title && /* @__PURE__ */ React6.createElement("div", { style: titleStyles }, title), /* @__PURE__ */ React6.createElement("div", { style: actionGroupStyles }, actions.map((action) => /* @__PURE__ */ React6.createElement(
    "button",
    {
      key: action.id,
      onClick: action.onClick,
      disabled: action.disabled,
      style: getActionStyles(action),
      title: action.label
    },
    action.icon,
    /* @__PURE__ */ React6.createElement("span", null, action.label)
  ))));
};

// src/SettingsPanel/SettingsPanel.tsx
import React7 from "react";
import { motion as motion2, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { theme as theme6 } from "@agentic-ui/core";

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
    backgroundColor: theme6.colors.background.secondary,
    borderLeft: position === "right" ? `1px solid ${theme6.colors.border.default}` : void 0,
    borderRight: position === "left" ? `1px solid ${theme6.colors.border.default}` : void 0,
    zIndex: 1e3,
    ...style
  };
  const headerStyles = {
    padding: theme6.spacing[4],
    borderBottom: `1px solid ${theme6.colors.border.default}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };
  const contentStyles = {
    padding: theme6.spacing[4],
    height: "calc(100vh - 64px)",
    // Header height
    overflowY: "auto"
  };
  const groupStyles = {
    marginBottom: theme6.spacing[6]
  };
  const optionStyles = {
    marginBottom: theme6.spacing[4]
  };
  const renderOption = (option) => {
    var _a;
    const baseInputStyles = {
      backgroundColor: theme6.colors.background.tertiary,
      border: `1px solid ${theme6.colors.border.default}`,
      borderRadius: theme6.radius.md,
      padding: theme6.spacing[2],
      color: theme6.colors.text.primary,
      width: "100%",
      fontSize: theme6.fontSizes.sm
    };
    switch (option.type) {
      case "toggle":
        return /* @__PURE__ */ React7.createElement("label", { style: { display: "flex", alignItems: "center", cursor: "pointer" } }, /* @__PURE__ */ React7.createElement(
          "input",
          {
            type: "checkbox",
            checked: option.value,
            onChange: (e) => {
              var _a2;
              return (_a2 = option.onChange) == null ? void 0 : _a2.call(option, e.target.checked);
            },
            style: { marginRight: theme6.spacing[2] }
          }
        ), /* @__PURE__ */ React7.createElement("span", null, option.label));
      case "select":
        return /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("label", { style: { display: "block", marginBottom: theme6.spacing[2] } }, option.label), /* @__PURE__ */ React7.createElement(
          "select",
          {
            value: option.value,
            onChange: (e) => {
              var _a2;
              return (_a2 = option.onChange) == null ? void 0 : _a2.call(option, e.target.value);
            },
            style: baseInputStyles
          },
          (_a = option.options) == null ? void 0 : _a.map((opt) => /* @__PURE__ */ React7.createElement("option", { key: opt.value, value: opt.value }, opt.label))
        ));
      case "input":
        return /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("label", { style: { display: "block", marginBottom: theme6.spacing[2] } }, option.label), /* @__PURE__ */ React7.createElement(
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
        return /* @__PURE__ */ React7.createElement(
          "button",
          {
            onClick: option.onClick,
            style: {
              backgroundColor: theme6.colors.brand[500],
              color: theme6.colors.white,
              border: "none",
              borderRadius: theme6.radius.md,
              padding: `${theme6.spacing[2]} ${theme6.spacing[4]}`,
              cursor: "pointer",
              width: "100%",
              fontSize: theme6.fontSizes.sm,
              fontWeight: theme6.fontWeights.medium
            }
          },
          option.label
        );
      default:
        return null;
    }
  };
  return /* @__PURE__ */ React7.createElement(AnimatePresence2, null, isOpen && /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(
    motion2.div,
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
        backgroundColor: theme6.colors.black,
        zIndex: 999
      },
      onClick: onClose
    }
  ), /* @__PURE__ */ React7.createElement(
    motion2.div,
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
    /* @__PURE__ */ React7.createElement("div", { style: headerStyles }, /* @__PURE__ */ React7.createElement("h2", { style: {
      fontSize: theme6.fontSizes.xl,
      fontWeight: theme6.fontWeights.semibold,
      color: theme6.colors.text.primary
    } }, "Settings"), /* @__PURE__ */ React7.createElement(
      "button",
      {
        onClick: onClose,
        style: {
          background: "none",
          border: "none",
          color: theme6.colors.text.secondary,
          cursor: "pointer",
          fontSize: theme6.fontSizes.xl
        }
      },
      "\xD7"
    )),
    /* @__PURE__ */ React7.createElement("div", { style: contentStyles }, groups.map((group) => /* @__PURE__ */ React7.createElement("div", { key: group.id, style: groupStyles }, /* @__PURE__ */ React7.createElement("h3", { style: {
      fontSize: theme6.fontSizes.lg,
      fontWeight: theme6.fontWeights.medium,
      marginBottom: theme6.spacing[2],
      color: theme6.colors.text.primary
    } }, group.title), group.description && /* @__PURE__ */ React7.createElement("p", { style: {
      fontSize: theme6.fontSizes.sm,
      color: theme6.colors.text.secondary,
      marginBottom: theme6.spacing[4]
    } }, group.description), group.options.map((option) => /* @__PURE__ */ React7.createElement("div", { key: option.id, style: optionStyles }, renderOption(option), option.description && /* @__PURE__ */ React7.createElement("p", { style: {
      fontSize: theme6.fontSizes.xs,
      color: theme6.colors.text.tertiary,
      marginTop: theme6.spacing[1]
    } }, option.description))))))
  )));
};
export {
  AgentConversation,
  AgentMessage,
  Button,
  Collapse,
  SettingsPanel,
  Toolbar,
  TracingPanel
};
