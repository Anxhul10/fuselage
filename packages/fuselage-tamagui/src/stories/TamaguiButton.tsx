import { View, styled } from '@tamagui/core'
import { withStaticProperties } from '@tamagui/core'

const ButtonFrame = styled(View, {
  name: 'Button',
  backgroundColor: '$background',
  alignItems: 'center',
  flexDirection: 'row',

  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          gap: tokens.space[name].val * 0.2,
        }
      },
    },
  } as const,
})

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  color: '$color',
  userSelect: 'none',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})

export const Button = withStaticProperties(ButtonFrame, {
    Text: ButtonText,
})
  