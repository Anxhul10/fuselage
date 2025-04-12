import type { Preview } from '@storybook/react'
import {TamaguiProvider} from 'tamagui';
import {config} from '../tamagui.config';
import React from 'react';
const preview: Preview = {
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 4,
        cellAmount: 4,
        opacity: 0.5,
      },
    },
    options: {
      storySort: {
        order: [
          'Inputs',
          'Data Display',
          'Feedback',
          'Containers',
          'Navigation',
          'Layout',
          'Message',
          'Sidebar',
        ],
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
};

export default preview;