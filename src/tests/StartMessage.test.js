import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import {stubConsoleError} from './utils/test-utils';
import StartMessage from '../components/StartMessage';

describe("<StartMessage />", ()=>{
    stubConsoleError();

    test('renders without crashing', () => {
        const tree = renderer.create(
            <StartMessage />
                ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    `Add test for isOpen state. The StartMessage should close when a table is displayed`

});
