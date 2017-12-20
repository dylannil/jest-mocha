import 'react-native';
import React from 'react';
import Index from '../../src/view/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('xxx', () => {
it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
});
