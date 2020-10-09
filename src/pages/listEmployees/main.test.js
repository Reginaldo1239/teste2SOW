import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main';


test('renders a message', () => {
    const tree = renderer.create(<Main></Main>)
    .toJSON();
  expect(tree).toMatchSnapshot();
 
  })  