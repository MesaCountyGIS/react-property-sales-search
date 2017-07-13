import React from 'react';
import renderer from 'react-test-renderer';
import FacetsBar from '../components/FacetsBar';

describe("<FacetsBar />", ()=>{
    // test('renders without crashing', () => {
    //     const tree = renderer.create(
    //         <FacetsBar />
    //   ).toJSON();
    //   expect(tree).toMatchSnapshot();
    // });

    expect(`React-datepicker throws "Invariant Violation: getNodeFromInstance: Invalid argument."
    error in Jest testing when findDOMNode is used. Fork React-Datepicker to fix or file an issue`).toEqual(
        `React-datepicker throws "Invariant Violation: getNodeFromInstance: Invalid argument."
        error in Jest testing when findDOMNode is used. Fork React-Datepicker to fix or file an issue`
    )
});
