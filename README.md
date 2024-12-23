# Agentic UI
> [!CAUTION]
> Not Production Ready, don't use it in your workload yet !.


A modern, accessible React component library designed for AI-powered interfaces. 

## Features

- 🎨 Beautiful dark theme with consistent design tokens
- 🔧 Fully typed with TypeScript
- 📦 Tree-shakeable and side-effect free
- 🎭 Smooth animations with Framer Motion
- 🎯 Focused on AI interactions
- 🌙 Dark mode by default
- ♿️ Accessible components
- 📱 Responsive design

## Installation

```bash
# Install core package
npm install @agentic-ui/core

# Install components package
npm install @agentic-ui/components
```

## Usage

```tsx
import { Button } from '@agentic-ui/components';
import { theme } from '@agentic-ui/core';

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Available Packages

### @agentic-ui/core

Core design tokens and utilities:
- Color system
- Typography
- Spacing
- Shadows
- Border radius
- CSS utilities
- Theme configuration

### @agentic-ui/components

React components optimized for AI interfaces:
- AgentMessage
- TracingPanel
- AgentConversation
- Button
- Input
- Select
- Card
- Modal
- Toolbar
- SettingsPanel
- And more...

## Development

```bash
# Install dependencies
yarn install

# Build all packages
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Format code
yarn format
```

## Contributing

We welcome contributions! Please see our [contributing guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
