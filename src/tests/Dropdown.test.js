import React from 'react';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import {stubConsoleError} from './utils/test-utils';
import Dropdown from '../components/Dropdown';

describe("<Dropdown />", ()=>{
    stubConsoleError();

    const testContent = [
         {type: 'heading', value: 'Improved Sales', label: 'Improved Sales'},
         {type: 'item', value: 'Agricultural', label: 'Agricultural' },
         {type: 'item', value: 'Commercial/Industrial', label: 'Commercial/Industrial' },
         {type: 'item', value: 'Agricultural Vacant', label: 'Agricultural Vacant' },
    ]

    test('renders without crashing', () => {
        const tree = renderer.create(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}/>
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    test('UL stays open when a heading is clicked clicked', () => {
        const wrapper = mount(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}
            />
      )

      //run showHide once with the test-dropdown class to set the display
      //state to true. Then run showHide to test clicking on a heading.
      wrapper.instance().showHide({target:{className: 'test-dropdown'}});
      wrapper.instance().showHide({target:{className: 'heading'}});
      expect(wrapper.nodes[0].state.display).toEqual(true);
    });

    test('UL shows or hides when dropdown clicked', () => {
        const wrapper = mount(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}
            />
      )

      wrapper.instance().showHide({target:{className: 'test-dropdown'}});
      expect(wrapper.nodes[0].state.display).toEqual(true);
      wrapper.instance().showHide({target:{className: 'test-dropdown'}});
      expect(wrapper.nodes[0].state.display).toEqual(false);
    });

    test('UL closes when anything other than dropdown is clicked', () => {
        const wrapper = mount(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}
            />
      )

      wrapper.instance().showHide({target:{className: 'test-dropdown'}});
      expect(wrapper.nodes[0].state.display).toEqual(true);
      wrapper.instance().showHide({target:{className: 'some-random-className'}});
      expect(wrapper.nodes[0].state.display).toEqual(false);
    });

    test('UL closes when a list item is clicked', () => {
        const wrapper = mount(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}
            />
      )

      wrapper.instance().showHide({target:{className: 'test-dropdown'}});
      expect(wrapper.nodes[0].state.display).toEqual(true);
      wrapper.instance().showHide({target:{className: 'item'}});
      expect(wrapper.nodes[0].state.display).toEqual(false);
    });

    test('Test selectNode method to change the state of selected value', () => {
        const wrapper = mount(
            <Dropdown
                baseclass='test-dropdown'
                option={testContent}
                placeholder='Select Test Data'
                value={'Select Test Data'}
            />
      )

      wrapper.instance().selectNode({target:{className: 'test-dropdown',
                                    innerHTML:'Agricultural'}});
      expect(wrapper.nodes[0].state.value).toEqual('Agricultural');
    });

});
