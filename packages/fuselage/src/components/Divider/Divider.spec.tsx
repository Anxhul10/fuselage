import { composeStories } from '@storybook/react-webpack5';

import { render } from '../../testing';

import * as stories from './Divider.stories';

const { Default } = composeStories(stories);

describe('[Divider Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
