import { composeStories } from '@storybook/react-webpack5';

import { render } from '../../testing';

import * as stories from './Throbber.stories';

const { Default } = composeStories(stories);

describe('[Throbber Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
