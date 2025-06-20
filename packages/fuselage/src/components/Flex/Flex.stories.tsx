import type { Meta } from '@storybook/react-webpack5';
import type { ComponentType } from 'react';

import Tile from '../Tile';

import Flex from '.';
import FlexContainer from './FlexContainer';
import FlexItem from './FlexItem';

export default {
  title: 'Layout/Flex',
  subcomponents: {
    'FlexContainer': FlexContainer as ComponentType<any>,
    'FlexItem': FlexItem as ComponentType<any>,
    'Flex.Container': Flex.Container as ComponentType<any>,
    'Flex.Item': Flex.Item as ComponentType<any>,
  },
} satisfies Meta;

export const Example = () => (
  <Flex.Container>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const Direction = () => (
  <Flex.Container direction='row-reverse'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const Wrap = () => (
  <Flex.Container wrap='wrap'>
    <Tile>
      {Array.from({ length: 12 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const JustifyContent = () => (
  <Flex.Container justifyContent='space-around'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const AlignItems = () => (
  <Flex.Container alignItems='end'>
    <Tile>
      {Array.from({ length: 3 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile style={{ height: i * 100 }}>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const AlignContent = () => (
  <Flex.Container wrap='wrap' alignContent='end'>
    <Tile style={{ minHeight: 400 }}>
      {Array.from({ length: 12 }, (_, i) => (
        <Flex.Item key={i}>
          <Tile>#{i + 1}</Tile>
        </Flex.Item>
      ))}
    </Tile>
  </Flex.Container>
);

export const Order = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item order={1}>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const Grow = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item grow={1}>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const Shrink = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item shrink={1}>
        <Tile width='full'>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const Basis = () => (
  <Flex.Container>
    <Tile>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item basis='400px'>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);

export const Align = () => (
  <Flex.Container alignItems='center'>
    <Tile style={{ minHeight: 400 }}>
      <Flex.Item>
        <Tile>#1</Tile>
      </Flex.Item>
      <Flex.Item align='end'>
        <Tile>#2</Tile>
      </Flex.Item>
      <Flex.Item>
        <Tile>#3</Tile>
      </Flex.Item>
    </Tile>
  </Flex.Container>
);
