import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';


test('renders a message', () => {
    const tree1 = renderer.create(<Button  content='test' ></Button>).toJSON();
    const tree2= renderer.create(<Button  color='red' content='test' ></Button>).toJSON();
  expect(tree1).toMatchSnapshot();
  expect(tree2).toMatchSnapshot();
 
 
  })  