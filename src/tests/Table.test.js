import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import {stubConsoleError} from './utils/test-utils';
import Table from '../components/Table';

describe("<Table />", ()=>{
    stubConsoleError();

    test('renders without crashing', () => {
        const tree = renderer.create(
            <Table />
                ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    `Add test for isOpen state. The Table should open when data is received`

});
