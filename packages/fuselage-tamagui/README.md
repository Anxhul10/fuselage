# 🚀 Tamagui + Vite + Storybook Setup

This project demonstrates how to set up **Tamagui** with **Vite** and **Storybook** from scratch.  
The main purpose was to test if Tamagui can be configured and rendered properly using Vite and Storybook.

---

## 🛠️ Tech Stack

- [Tamagui](https://tamagui.dev/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
- React

---

## 📦 Installation & Setup

### 1. Create a Vite Project

```bash
yarn create vite
```

### 2. Install Tamagui Dependencies

```bash
yarn add @tamagui/config @tamagui/core tamagui react-native-web
```

### 3. Create `tamagui.config.ts` in the Root Directory

```ts
// tamagui.config.ts
import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from '@tamagui/core'

export const config = createTamagui(defaultConfig)

type CustomConfig = typeof config

// ensure types work
declare module 'tamagui' {
  interface TamaguiCustomConfig extends CustomConfig {}
}
```

---

### 4. Set Up Storybook

```bash
yarn create storybook@latest
```

---

### 5. Configure `.storybook/preview.tsx` to Wrap Stories with `TamaguiProvider`

```tsx
// .storybook/preview.tsx
import type { Preview } from '@storybook/react'
import { TamaguiProvider } from 'tamagui'
import { config } from '../tamagui.config'
import React from 'react'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <Story />
      </TamaguiProvider>
    ),
  ],
}

export default preview
```

---

### 6. Fix `process is not defined` Error When Running Storybook

Add the following to your `vite.config.ts`:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Fix for Storybook error
  },
})
```

---

## ▶️ Run Storybook

```bash
yarn storybook
```

---

## 💡 Notes

- This is a minimal setup created for experimental purposes.
- You can extend this to build reusable Tamagui components and share them via Storybook.
- Feel free to fork or clone this repo as a starting point.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
