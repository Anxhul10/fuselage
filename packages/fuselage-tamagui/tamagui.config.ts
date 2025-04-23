import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui, createTokens } from '@tamagui/core'

const customTokens = createTokens({
  size: {
    ...defaultConfig.tokens.size, // keep default sizes
    sm: 38,
    md: 46,
    lg: 60,
  },
  space: {
    ...defaultConfig.tokens.space,
    sm: 15,
    md: 20,
    lg: 25,
  },
  radius: {
    ...defaultConfig.tokens.radius,
    sm: 4,
    md: 8,
    lg: 12,
  },
  // add others if needed...
})

const customThemes = {
  ...defaultConfig.themes,
  light_Button: {
    ...defaultConfig.themes.light, // inherit from base light theme
    background: '#ccc',
    backgroundPress: '#bbb',
    backgroundHover: '#ddd',
    color: '#222',
  },
}

export const config = createTamagui({
  ...defaultConfig,
  tokens: customTokens,
  themes: customThemes,
})

type CustomConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends CustomConfig {}
}
