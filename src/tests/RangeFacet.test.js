import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import {stubConsoleError} from './utils/test-utils'
import RangeFacet from '../components/RangeFacet';

describe("<RangeFacet />", ()=>{
    stubConsoleError();

    test(`changeMin and changeMax should update state`, ()=>{
        const wrapper = mount(
            <RangeFacet
                title='test range facet'
                minLabel='test min label'
                maxLabel='test max label'
                minValue='test min value'
                maxValue='test max value'
                step='test step'
            />
        )
        wrapper.instance().changeMin({target:{value: 500}});
        wrapper.instance().changeMax({target:{value: 5000}});
        expect(wrapper.nodes[0].state.minValue).toEqual(500);
        expect(wrapper.nodes[0].state.maxValue).toEqual(5000);
    });



            test(`renders without crashing`, () => {
                const tree = renderer.create(
                    <RangeFacet
                        title='test range facet'
                        minLabel='test min label'
                        maxLabel='test max label'
                        minValue='test min value'
                        maxValue='test max value'
                        step='test step'
                    />
      ).toJSON();

      sinon.assert.notCalled(console.error)
      expect(tree).toMatchSnapshot();
    });

    test(`ensures an error is called when required prop not passed`, () => {
      const tree = renderer.create(
          <RangeFacet
              //   title='test range facet'
              minLabel='test min label'
              maxLabel='test max label'
              //   minValue='test min value'
              //   maxValue='test max value'
              step='test step'
          />
      ).toJSON();
      sinon.assert.calledThrice(console.error)
    });

    test(`ensures an error is called when required prop not passed`, () => {
      const tree = renderer.create(
          <RangeFacet
              title='test range facet'
              minLabel='test min label'
              maxLabel='test max label'
              minValue='test min value'
              maxValue='test max value'
              step='test step'
          />
      ).toJSON();

    });

});
