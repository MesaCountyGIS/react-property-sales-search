import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import {stubConsoleError} from './utils/test-utils'
import BufferFacet from '../components/BufferFacet';

describe("<BufferFacet />", ()=>{
    stubConsoleError();

    test(`renders without crashing`, () => {
        const tree = renderer.create(
            <BufferFacet />
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

});
