import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import {stubConsoleError} from './utils/test-utils'
import Qualification from '../components/Qualification';

describe("<Qualification />", ()=>{
    stubConsoleError();

    test('renders without crashing', () => {
        const tree = renderer.create(
            <Qualification />
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });
});
