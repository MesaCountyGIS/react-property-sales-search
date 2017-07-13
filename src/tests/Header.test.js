import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe("<Header />", ()=>{
    test('renders without crashing', () => {
        const tree = renderer.create(
            <Header />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
