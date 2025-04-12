import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

// Extend the default light theme with your custom tokens
const customLightTheme = {
  ...defaultConfig.themes.light,
  'button-backgroundPrimaryDefault': 'grey',
  'button-backgroundPrimaryHover': 'dark',
  'button-backgroundPrimaryPress': 'navy',
  // Add other tokens here
}

export const config = createTamagui({
  ...defaultConfig,
  themes: {
    ...defaultConfig.themes,
    light: customLightTheme,
  },
})

type CustomConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends CustomConfig {}
}
