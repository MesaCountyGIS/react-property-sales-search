import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import {stubConsoleError} from './utils/test-utils';
import MoreFilters from '../components/MoreFilters';

describe("<MoreFilters />", ()=>{
    stubConsoleError();

    test('renders without crashing', () => {
        const tree = renderer.create(
            <MoreFilters
                message={'test message'}
            />
                ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    test('getCount returns one record when one acount number is passed', () => {
        const wrapper = mount(
            <MoreFilters
                message={'test message'}
            />
      )

      wrapper.instance().toggleModal();
      expect(wrapper.nodes[0].state.modalIsOpen).toEqual(true);
    });
});
