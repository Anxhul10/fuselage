import type { Preview } from '@storybook/react'
import {TamaguiProvider} from 'tamagui'
import {config} from '../tamagui.config'
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

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//        color: /(background|color)$/i,
//        date: /Date$/i,
//       },
//     },
//   },
//   // decorators: [
//   //   (Story) => (
//   //     <TamaguiProvider config={config}>
//   //       <Story />
//   //     </TamaguiProvider>
//   //   ),
//   // ],
// };

// export default preview;